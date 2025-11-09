const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..', 'src');
const exts = ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'];

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full, files);
    } else if (/\.(js|jsx|ts|tsx)$/.test(ent.name)) {
      files.push(full);
    }
  }
  return files;
}

function findActualPathSegments(baseDir, segments) {
  const resolved = [];
  let cur = baseDir;
  for (const seg of segments) {
    if (!fs.existsSync(cur) || !fs.statSync(cur).isDirectory()) return null;
    const entries = fs.readdirSync(cur);
    // look for exact match first
    if (entries.includes(seg)) {
      resolved.push(seg);
      cur = path.join(cur, seg);
      continue;
    }
    // try case-insensitive match
    const lower = seg.toLowerCase();
    const found = entries.find((e) => e.toLowerCase() === lower);
    if (found) {
      resolved.push(found);
      cur = path.join(cur, found);
      continue;
    }
    return null;
  }
  return resolved;
}

function tryResolveImport(fromFile, importPath) {
  // Only handle relative paths
  if (!importPath.startsWith('./') && !importPath.startsWith('../')) return null;
  const dir = path.dirname(fromFile);
  const candidate = path.resolve(dir, importPath);

  // If it points to a file with extension
  for (const ext of exts) {
    const f = candidate + ext;
    if (fs.existsSync(f) && fs.statSync(f).isFile()) return f;
  }

  // If candidate itself exists
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;

  // If it's a directory, look for index files
  if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
    for (const ext of exts) {
      const idx = path.join(candidate, 'index' + ext);
      if (fs.existsSync(idx)) return idx;
    }
  }

  // try appended extensions
  for (const ext of exts) {
    const f = candidate + ext;
    if (fs.existsSync(f)) return f;
  }

  return null;
}

function getImportPaths(fileContent) {
  const imports = [];
  const importRegex = /from\s+['"]([^'"]+)['"]/g;
  let m;
  while ((m = importRegex.exec(fileContent))) {
    imports.push(m[1]);
  }
  // require('...') patterns
  const reqRegex = /require\(['"]([^'"]+)['"]\)/g;
  while ((m = reqRegex.exec(fileContent))) {
    imports.push(m[1]);
  }
  return imports;
}

const files = walk(SRC);
const mismatches = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const imports = getImportPaths(content);
  for (const imp of imports) {
    if (!imp.startsWith('.') ) continue; // only relative
    const resolved = tryResolveImport(file, imp);
    if (!resolved) continue; // unresolved; skip

    // compare each segment's casing against actual directory listing
    const relFromSrc = path.relative(SRC, path.dirname(file));
    const importSegments = imp.split('/').filter(Boolean);
    // Build base dir segments starting from file's directory
    const baseDir = path.dirname(file);

    // Resolve step-by-step from baseDir using filesystem entries
    const segments = importSegments.slice();

    const checkDir = path.dirname(path.resolve(baseDir, importSegments.join('/')));
    const lastName = path.basename(resolved).replace(path.extname(resolved), '');

    // Determine actual referenced name (file or folder)
    const resolvedBase = path.basename(resolved, path.extname(resolved));
    // If resolved target is an index file, the import usually references the directory name
    const actualFinalName = /^index$/i.test(resolvedBase)
      ? path.basename(path.dirname(resolved))
      : resolvedBase;

    // The import's final segment (as written) may include extension; strip it
    const writtenLast = importSegments[importSegments.length - 1];
    const writtenName = writtenLast.replace(/\.[^.]+$/, '');

    if (writtenName !== actualFinalName) {
      // Walk from file dir to the resolved file, collecting actual cased segments
      const parts = [];
      let cur = path.dirname(file);
      const relToResolved = path.relative(cur, resolved);
      const segs = relToResolved.split(path.sep);
      for (const s of segs) {
        if (s === '..' || s === '.') { parts.push(s); cur = path.resolve(cur, s); continue; }
        const entries = fs.readdirSync(cur);
        const found = entries.find(e => e.toLowerCase() === s.toLowerCase());
        parts.push(found || s);
        cur = path.join(cur, found || s);
      }

      // build suggested import path relative to file dir
      const suggested = parts.join('/').replace(/\\/g, '/');

      mismatches.push({ file, import: imp, resolved, writtenName, actualFinalName, suggested });
    }
  }
}

if (mismatches.length === 0) {
  console.log('No import casing mismatches found.');
  process.exit(0);
}

console.log(JSON.stringify(mismatches, null, 2));
process.exit(0);
