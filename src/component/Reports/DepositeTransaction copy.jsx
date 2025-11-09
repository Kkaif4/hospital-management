// import React, { useState,useRef } from 'react';
// import { Button } from 'react-bootstrap';
// import './UserCollectionReport.css';
// import { startResizing } from '../TableHeadingResizing/resizableColumns';

// const DepositeTransaction = () => {
//   const [showReport, setShowReport] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [selectedDoctor, setSelectedDoctor] = useState('');
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [columnWidths, setColumnWidths] = useState({});
//   const tableRef = useRef(null);

//   // Sample data for reports
//   const reportsData = [
//     {
//       depositDate: '09.Feb-2024',
//       receiptNo: 'DRI',
//       hospitalNo: '2402000021',
//       patientName: 'Jane Mercy',
//       contactNo: '0720000125',
//       ageSex: '8 YIF',
//       depositReceived: 1200,
//       depositDeducted: 0,
//       depositReturned: 1200,
//       userName: 'Mr. admin',
//       counter: 'OPD-Counter',
//     },
//     {
//       depositDate: '10.Feb-2024',
//       receiptNo: 'DR2',
//       hospitalNo: '2402000021',
//       patientName: 'Jane Mercy',
//       contactNo: '0720000125',
//       ageSex: '8 YIF',
//       depositReceived: 0,
//       depositDeducted: 0,
//       depositReturned: 0,
//       userName: 'Mr. admin',
//       counter: 'New-I',
//     },
//     {
//       depositDate: 'IO.Feb-2024',
//       receiptNo: 'DR3',
//       hospitalNo: '2402000021',
//       patientName: 'Jane Mercy',
//       contactNo: '0720000125',
//       ageSex: '8 YIF',
//       depositReceived: 1200,
//       depositDeducted: 0,
//       depositReturned: 1200,
//       userName: 'Mr. admin',
//       counter: 'New-I',
//     },
//     {
//       depositDate: '1 1 -Jul-2024',
//       receiptNo: 'DR20',
//       hospitalNo: '2407003791',
//       patientName: 'Sajid Passa Shafin',
//       contactNo: '22222',
//       ageSex: '22 Y/M',
//       depositReceived: 1000,
//       depositDeducted: 0,
//       depositReturned: 0,
//       userName: 'Mr. admin',
//       counter: 'New-2',
//     },
//     {
//       depositDate: '1 1 -Jul-2024',
//       receiptNo: 'DR21',
//       hospitalNo: '2407003791',
//       patientName: 'Sajid Passa Shafin',
//       contactNo: '22222',
//       ageSex: '22 Y/M',
//       depositReceived: 1000,
//       depositDeducted: 0,
//       depositReturned: 0,
//       userName: 'Mr. admin',
//       counter: 'New-2',
//     },
//     {
//       depositDate: '1 1.Jul.2024',
//       receiptNo: 'DRU',
//       hospitalNo: '2406003783',
//       patientName: 'Monicah Juma',
//       contactNo: '0764565656',
//       ageSex: '34',
//       depositReceived: 0,
//       depositDeducted: 0,
//       depositReturned: 0,
//       userName: 'Mr. admin',
//       counter: 'New-I',
//     },
//   ];

//   // Sample data for dropdown filters
//   const doctors = ['Dr. Smith', 'Dr. Jones', 'Dr. Brown'];
//   const departments = ['Cardiology', 'Neurology', 'Orthopedics'];

//   const handlePrint = () => {
//     window.print(); // Simple print functionality using the browser's print dialog
//   };

//   const handleExport = () => {
//     console.log('Export function not yet implemented');
//     // Implement your export logic here
//   };

//   const handlePopupToggle = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   const handleDateRangeSelection = (range) => {
//     console.log('Selected Range:', range);
//     // Implement the logic to filter data based on the selected range
//     setIsPopupOpen(false); // Close the popup after selection
//   };

//   const handleSearch = (query) => {
//     console.log(`Searching for: ${query}`);
//   };

//   const handleShowReport = () => {
//     setShowReport(true);
//   };

//   return (
//     <div className="user-collection-report">
//       <div className="user-collection-report-header">
//         <h3 className="user-collection-report-title">⚛ Deposit Balance Report</h3>
//         <div className="user-collection-report-filters">
//           <div className="user-collection-report-date-filter">
//             <label>From:</label>
//             <input type="date" />
//             <label>To:</label>
//             <input type="date" />
//             <button className="user-collection-report-fav-btn">☆</button>
//             <button className="user-collection-report-fav-btn" onClick={handlePopupToggle}>-</button>

//             {isPopupOpen && (
//               <div className="user-collection-popup">
//                 <ul className="user-collection-popup-list">
//                   <li onClick={() => handleDateRangeSelection('Today')}>Today</li>
//                   <li onClick={() => handleDateRangeSelection('Last 1 Week')}>Last 1 Week</li>
//                   <li onClick={() => handleDateRangeSelection('Last 1 Month')}>Last 1 Month</li>
//                   <li onClick={() => handleDateRangeSelection('Last 3 Months')}>Last 3 Months</li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <button className="user-collection-report-show-btn" onClick={handleShowReport}>Show Report</button>
//         </div>
//         <div className="patient-census-collection-dep">
//           <div className="user-collection-report-doctor-filter">
//             <label>Doctor:</label>
//             <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
//               <option value="">Select Doctor</option>
//               {doctors.map((doctor, index) => (
//                 <option key={index} value={doctor}>{doctor}</option>
//               ))}
//             </select>
//           </div>
//           <div className="user-collection-report-department-filter">
//             <label>Department:</label>
//             <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
//               <option value="">Select Department</option>
//               {departments.map((department, index) => (
//                 <option key={index} value={department}>{department}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="user-collection-repor-advance-filter">
//         {/* <button className="user-collection-report-show-btn">Advance Filter</button> */}
//       </div>

//       {showReport && (
//         <>
//           <div className="user-collection-report-controls">
//             {/* Search Input */}
//             <input
//               type="text"
//               className="user-collection-report-search"
//               placeholder="Search..."
//               onChange={(e) => handleSearch(e.target.value)}
//             />
            
//             {/* Print and Export Buttons */}
//             <div className="user-collection-page-results-info">
//               Showing 334/334 results
//             </div>

//             <button className="user-collection-report-print-btn" onClick={handlePrint}>Print</button>
//             <button className="user-collection-report-print-btn" onClick={handleExport}>Export</button>
//           </div>
//           <div className="user-collection-report-tab">
//             <div className="table-scroll-container">
//             <table className="patientList-table" ref={tableRef}>
//           <thead>
//             <tr>
//               {[
              // "Deposit No",
              // "Receipt No",
              // "Hospital No",
              // "Patient Name",
              // "Age/Sex",
              // "Contact No",
              // "Deposit Received",
              // "Deposit Deducted",
              // "Deposit Returned",
              // "User Name",
              // "Counter"
//               ].map((header, index) => (
//                 <th
//                   key={index}
//                   style={{ width: columnWidths[index] }}
//                   className="resizable-th"
//                 >
//                   <div className="header-content">
//                     <span>{header}</span>
//                     <div
//                       className="resizer"
//                       onMouseDown={startResizing(
//                         tableRef,
//                         setColumnWidths
//                       )(index)}
//                     ></div>
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//                 <tbody>
//                   {reportsData.map((row, index) => (
//                     <tr key={index}>
//                       <td>{row.depositDate}</td>
//                       <td>{row.receiptNo}</td>
//                       <td>{row.hospitalNo}</td>
//                       <td>{row.patientName}</td>
//                       <td>{row.ageSex}</td>
//                       <td>{row.contactNo}</td>
//                       <td>{row.depositReceived}</td>
//                       <td>{row.depositDeducted}</td>
//                       <td>{row.depositReturned}</td>
//                       <td>{row.userName}</td>
//                       <td>{row.counter}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="user-collection-report-page-no">
//               <Button className="user-collection-report-pagination-btn">First</Button>
//               <Button className="user-collection-report-pagination-btn">Previous</Button>
//               <span>Page 1 of 4</span>
//               <Button className="user-collection-report-pagination-btn">Next</Button>
//               <Button className="user-collection-report-pagination-btn">Last</Button>
//             </div>
//           </div>
//           <div className='net-cash-collection-header'>
//           <h4 className="user-collection-report-net-collection">Summary</h4>
//           <div className="user-collection-report-summary">
 
//   <table className="user-collection-report-summary-table">
//   <tbody>
//   <tr><td>Total Deposit Received</td><td>232,122.00</td></tr>
//   <tr><td>Total Deposit Deducted</td><td>3,400.00</td></tr>
//   <tr><td>Total Deposit Returned</td><td>14,300.00</td></tr>
//   <tr><td>Total Balance (A-(B+C))</td><td>214,422.00</td></tr>
// </tbody>

//   </table>
//   {/* Uncomment and use this button if needed */}
//   {/* <button className="user-collection-report-print-btn" onClick={handlePrint}>Print</button> */}
//   </div>
//           </div>

//         </>
//       )}
//     </div>
//   );
// };

// export default DepositeTransaction;




import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './UserCollectionReport.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { API_BASE_URL } from '../api/api';

const FloatingInput = ({ label, type = "text", value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) props.onChange(e);
  };

  return (
    <div className={`UserCollectionReport-floating-field ${(isFocused || hasValue) ? 'active' : ''}`}>
      <input
        type={type}
        className="UserCollectionReport-floating-input"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={handleChange}
        {...props}
      />
      <label className="UserCollectionReport-floating-label">{label}</label>
    </div>
  );
};

const FloatingSelect = ({ label, options = [], value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  return (
    <div className={`UserCollectionReport-floating-field ${(isFocused || hasValue) ? 'active' : ''}`}>
      <select
        className="UserCollectionReport-floating-select"
        value={value || ''}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== '');
        }}
        onChange={(e) => {
          setHasValue(e.target.value !== '');
          if (props.onChange) props.onChange(e);
        }}
        {...props}
      >
        <option value="">{}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <label className="UserCollectionReport-floating-label">{label}</label>
    </div>
  );
};

const DepositeTransaction = () => {
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatDateTime = () => {
    const now = new Date();
    return now.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const [departmentData, setDepartmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columnWidths, setColumnWidths] = useState({});
  const [searchText, setSearchText] = useState('');
  const [dateRange, setDateRange] = useState({ 
    from: new Date().toISOString().split('T')[0],
    to: new Date().toISOString().split('T')[0]
  });
 const [totalDeposit, setTotalDeposit] = useState({
    received: 0,
    deducted: 0,
    returned: 0
  });  const tableRef = useRef(null);

  const fetchDepartmentWiseData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/ipbillings/department-wise?startDate=${dateRange.from}&endDate=${dateRange.to}`
      );
      setDepartmentData(response.data);
      const total = response.data.reduce((sum, dept) => sum + dept.NetSales, 0);
      setTotalCollection(total);
    } catch (error) {
      console.error('Error fetching department-wise data:', error);
      setDepartmentData([]);
      setTotalCollection(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartmentWiseData();
  }, [dateRange]);

  const handleExport = () => {
    const ws = XLSX.utils.table_to_sheet(tableRef.current);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'DepositeTransaction');
    XLSX.writeFile(wb, 'DepositeTransaction.xlsx');
  };

  const handlePrint = () => {
    const doc = new jsPDF('l', 'mm', 'a4');
    doc.setFontSize(16);
    doc.text('Deposite Transaction', doc.internal.pageSize.width / 2, 15, { align: 'center' });
    doc.setFontSize(10);
    doc.text(`From Date: ${formatDate(dateRange.from)}`, 14, 25);
    doc.text(`To Date: ${formatDate(dateRange.to)}`, 14, 30);
    doc.text(`Generated on: ${formatDateTime()}`, 14, 35);

    // Main Table Data
    const tableData = departmentData.map(dept => [
      dept.Department,
      `₹${dept.CashSales.toFixed(2)}`,
      `₹${dept.CashDiscount.toFixed(2)}`,
      `₹${dept.CreditDiscount.toFixed(2)}`,
      `₹${dept.GrossSales.toFixed(2)}`,
      `₹${dept.TotalDiscount.toFixed(2)}`,
      `₹${dept.ReturnCashSales.toFixed(2)}`,
      `₹${dept.ReturnCashDiscount.toFixed(2)}`,
      `₹${dept.ReturnCreditSales.toFixed(2)}`,
      `₹${dept.ReturnCreditDiscount.toFixed(2)}`,
      `₹${dept.TotalSalesReturn.toFixed(2)}`,
      `₹${dept.TotalReturnDiscount.toFixed(2)}`,
      `₹${dept.NetSales.toFixed(2)}`
    ]);

    const headers = [
      "Deposit No",
      "Receipt No",
      "Hospital No",
      "Patient Name",
      "Age/Sex",
      "Contact No",
      "Deposit Received",
      "Deposit Deducted",
      "Deposit Returned",
      "User Name",
      "Counter"
    ];

    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: 40,
      styles: {
        fontSize: 8,
        cellPadding: 2,
      },
      headStyles: {
        fillColor: [51, 122, 183],
        textColor: 255,
        fontSize: 9,
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
    });

    // Summary Table Data
    const summaryData = calculateSummaryData(departmentData);
    const summaryHeaders = ["Description", "Amount"];
    const summaryTableData = [
      ["Cash Sales", `₹${summaryData.cashSales.toFixed(2)}`],
      ["Credit Sales", `₹${summaryData.creditSales.toFixed(2)}`],
      ["Gross Sales (A+B)", `₹${summaryData.grossSales.toFixed(2)}`],
      ["Cash Discount", `₹${summaryData.cashDiscount.toFixed(2)}`],
      ["Credit Discount", `₹${summaryData.creditDiscount.toFixed(2)}`],
      ["Total Discount (D+E)", `₹${summaryData.totalDiscount.toFixed(2)}`],
      ["Return Cash Sales", `₹${summaryData.returnCashSales.toFixed(2)}`],
      ["Return Credit Sales", `₹${summaryData.returnCreditSales.toFixed(2)}`],
      ["Total Sales Return (G+H)", `₹${summaryData.totalSalesReturn.toFixed(2)}`],
      ["Return Cash Discount", `₹${summaryData.returnCashDiscount.toFixed(2)}`],
      ["Return Credit Discount", `₹${summaryData.returnCreditDiscount.toFixed(2)}`],
      ["Total Return Discount (J+K)", `₹${summaryData.totalReturnDiscount.toFixed(2)}`],
      ["Net Sales (C-F-I+L)", `₹${summaryData.netSales.toFixed(2)}`]
    ];

    doc.autoTable({
      head: [summaryHeaders],
      body: summaryTableData,
      startY: doc.lastAutoTable.finalY + 10,
      styles: {
        fontSize: 8,
        cellPadding: 2,
      },
      headStyles: {
        fillColor: [51, 122, 183],
        textColor: 255,
        fontSize: 9,
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
    });

    const pdfOutput = doc.output('bloburl');
    window.open(pdfOutput, '_blank');
  };

  const calculateSummaryData = (data) => {
    const cashSales = data.reduce((sum, dept) => sum + dept.CashSales, 0);
    const creditSales = data.reduce((sum, dept) => sum + dept.CreditSales, 0);
    const grossSales = cashSales + creditSales;
    const cashDiscount = data.reduce((sum, dept) => sum + dept.CashDiscount, 0);
    const creditDiscount = data.reduce((sum, dept) => sum + dept.CreditDiscount, 0);
    const totalDiscount = cashDiscount + creditDiscount;
    const returnCashSales = data.reduce((sum, dept) => sum + dept.ReturnCashSales, 0);
    const returnCreditSales = data.reduce((sum, dept) => sum + dept.ReturnCreditSales, 0);
    const totalSalesReturn = returnCashSales + returnCreditSales;
    const returnCashDiscount = data.reduce((sum, dept) => sum + dept.ReturnCashDiscount, 0);
    const returnCreditDiscount = data.reduce((sum, dept) => sum + dept.ReturnCreditDiscount, 0);
    const totalReturnDiscount = returnCashDiscount + returnCreditDiscount;
    const netSales = grossSales - totalDiscount - totalSalesReturn + totalReturnDiscount;

    return {
      cashSales,
      creditSales,
      grossSales,
      cashDiscount,
      creditDiscount,
      totalDiscount,
      returnCashSales,
      returnCreditSales,
      totalSalesReturn,
      returnCashDiscount,
      returnCreditDiscount,
      totalReturnDiscount,
      netSales,
    };
  };

  const filteredData = departmentData.filter(item => {
    const searchFields = [
      item.Department,
      item.CashSales,
      item.CashDiscount,
      item.CreditDiscount,
      item.GrossSales,
      item.TotalDiscount,
      item.ReturnCashSales,
      item.ReturnCashDiscount,
      item.ReturnCreditSales,
      item.ReturnCreditDiscount,
      item.TotalSalesReturn,
      item.TotalReturnDiscount,
      item.NetSales
    ];
    const matchesSearchText = searchFields.some(field =>
      field?.toString().toLowerCase().includes(searchText.toLowerCase())
    );
    return searchText === '' || matchesSearchText;
  });

  const summaryData = calculateSummaryData(departmentData);

  return (
    <div className="UserCollectionReport-container">
      <div className="UserCollectionReport-header-div">
        * Deposite Transaction
      </div>
      <div className="UserCollectionReport-header">
        <div className="UserCollectionReport-Collection">
          Total Collection: ₹{totalCollection.toFixed(2)}
        </div>
      </div>
      <div className="UserCollectionReport-grid">
        <FloatingInput
          label="From Date"
          type="date"
          value={dateRange.from}
          onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
        />
        <FloatingInput
          label="To Date"
          type="date"
          value={dateRange.to}
          onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
        />
      </div>
      <div className="UserCollectionReport-search-container">
        <input
          type="text"
          className="UserCollectionReport-search-box"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="UserCollectionReport-search-right">
          <span className="UserCollectionReport-results-count-span">
            Showing {filteredData.length} results
          </span>
          <button
            className="UserCollectionReport-print-button"
            onClick={handleExport}
          >
            <i className="fa-solid fa-file-excel"></i> Export
          </button>
          <button
            className="UserCollectionReport-print-button"
            onClick={handlePrint}
          >
            <i className="fa-solid fa-print"></i> Print
          </button>
        </div>
      </div>
      <table ref={tableRef}>
        <thead>
          <tr>
            {[
                             "Deposit No",
                             "Receipt No",
                             "Hospital No",
                             "Patient Name",
                             "Age/Sex",
                             "Contact No",
                             "Deposit Received",
                             "Deposit Deducted",
                             "Deposit Returned",
                             "User Name",
                             "Counter"
            ].map((header, index) => (
              <th
                key={index}
                style={{ width: columnWidths[index] }}
                className="resizable-th"
              >
                <div className="header-content">
                  <span>{header}</span>
                  <div
                    className="resizer"
                    onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                  ></div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="11" className="UserCollectionReport-no-rows">
                Loading...
              </td>
            </tr>
          ) : filteredData.length > 0 ? (
            filteredData.map((dept, index) => (
              <tr key={index} className="parent-row">
                <td>{dept.Department}</td>
                <td>₹{dept.CashSales.toFixed(2)}</td>
                <td>₹{dept.CashDiscount.toFixed(2)}</td>
                <td>₹{dept.CreditDiscount.toFixed(2)}</td>
                <td>₹{dept.GrossSales.toFixed(2)}</td>
                <td>₹{dept.TotalDiscount.toFixed(2)}</td>
                <td>₹{dept.ReturnCashSales.toFixed(2)}</td>
                <td>₹{dept.ReturnCashDiscount.toFixed(2)}</td>
                <td>₹{dept.ReturnCreditSales.toFixed(2)}</td>
                <td>₹{dept.ReturnCreditDiscount.toFixed(2)}</td>
                <td>₹{dept.TotalSalesReturn.toFixed(2)}</td>
                <td>₹{dept.TotalReturnDiscount.toFixed(2)}</td>
                <td>₹{dept.NetSales.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="UserCollectionReport-no-rows">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className='net-cash-collection-header'>
        <h4 className="UserCollectionReport-net-collection">Summary</h4>
        <div className="UserCollectionReport-summary">
          <table className="UserCollectionReport-summary-table">
            <tbody>
            <tr><td>Total Deposit Received</td><td>232,122.00</td></tr>
  <tr><td>Total Deposit Deducted</td><td>3,400.00</td></tr>
  <tr><td>Total Deposit Returned</td><td>14,300.00</td></tr>
  <tr><td>Total Balance (A-(B+C))</td><td>214,422.00</td></tr>
              </tbody>
              </table>
          </div>
      </div>
    </div>
  );
};

export default DepositeTransaction;