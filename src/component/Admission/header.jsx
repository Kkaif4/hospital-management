/* // neha-ADT-header-19/09/24 */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css"; // Add your CSS styles here

const Navbar = ({ handleNavigation }) => {
  const location = useLocation(); // Access the current route

  return (
    <></>
    // <header className="admission-header">
    //   <nav className="nav-links">
    //     <Link
    //       to="/adt/admittedpatients"
    //       className={`adt-header-button ${
    //         location.pathname === "/adt/admittedpatients" ? "active" : ""
    //       }`}
    //     >
    //       Admitted Patients
    //     </Link>
    //     <Link
    //       to="/adt/dischargedpatients"
    //       className={`adt-header-button ${
    //         location.pathname === "/adt/dischargedpatients" ? "active" : ""
    //       }`}
    //     >
    //       Discharged Patients
    //     </Link>
    //     <Link to="/adt/home"
    //      className={`adt-header-button ${
    //         location.pathname === "/adt/home" ? "active" : ""
    //       }`}
    //     >
    //       <i className="fa-solid fa-house-chimney"></i>
    //     </Link>   
        
    //     <Link
    //       to="/adt/ipadmission"
    //       className={`adt-header-button ${
    //         location.pathname === "/adt/ipadmission" ? "active" : ""
    //       }`}
    //     >
    //       Ip Admission
    //     </Link>
    //     <Link
    //       to="/adt/ipinformation"
    //       className={`adt-header-button ${
    //         location.pathname === "/adt/ipinformation" ? "active" : ""
    //       }`}
    //     >
    //       Ip Information
    //     </Link>
    //     {/* 
    //     <Link
    //       to="/adt/exchangebed"
    //       className={`adt-header-button ${location.pathname === '/adt/exchangebed' ? 'active' : ''}`}

    //     >
    //       Exchange Bed
    //     </Link>
    //     <Link
    //       to="/adt/cancelbedreservation"
    //       className={`adt-header-button ${location.pathname === '/adt/cancelbedreservation' ? 'active' : ''}`}

    //     >
    //       Cancel Bed Reservation
    //     </Link> 
    //     */}
    //   </nav>
    // </header>
  );
};

export default Navbar;
