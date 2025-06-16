// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom"; // Link is used for the sidebar

// import {
//   FaBars,
//   FaBell,
//   FaEnvelope,
//   FaUserCircle,
//   FaClock,
//   FaChevronDown,
//   FaUserCog,
//   FaSignOutAlt,
//   FaPlusSquare,
//   FaTasks,
//   FaSitemap,
//   FaChartBar,
//   FaBullhorn,
//   FaUsers,
//   FaUserPlus,
//   FaBuilding,
//   FaUserTie,
//   FaMapMarkedAlt,
//   FaFileAlt,
//   FaUserFriends,
//   FaGraduationCap,
//   FaHandshake,
//   FaIdBadge,
//   FaAddressBook,
//   FaTimes,
//   FaBookOpen,
//   FaUserGraduate,
//   FaPencilRuler,
//   FaLink as FaLinkIcon,
//   FaHeart,
//   FaWalking,
//   FaBook,
//   FaUserSecret,
//   FaChevronUp,
// } from "react-icons/fa";

// // Separate Footer Component
// const AppFooter = () => {
//   return (
//     <footer className="app-footer">
//       <div className="footer-left-placeholder"></div>
//       <div className="footer-center-content">
//         <a href="https://anoopam.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
//           Copyright 2025 by Anoopam Mission
//         </a>
//       </div>
//       <div className="footer-right-content">
//         <a
//           href="https://www.itcentre.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="footer-link footer-dev-credit"
//         >
//           Developed by ITC | Version 1.0
//         </a>
//       </div>
//     </footer>
//   );
// };

// const Sidebar = () => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [mobileActive, setMobileActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // State to manage which popup is open ('profile', 'notification', 'message', or null)
//   const [openPopup, setOpenPopup] = useState(null);

//   const sidebarRef = useRef(null);
//   // Refs for each icon and popup to handle closing on outside clicks
//   const profileIconRef = useRef(null);
//   const profilePopupRef = useRef(null);
//   const notificationIconRef = useRef(null);
//   const notificationPopupRef = useRef(null);
//   const messageIconRef = useRef(null);
//   const messagePopupRef = useRef(null);

//   const [activeParentMenu, setActiveParentMenu] = useState(null);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth <= 768;
//       setIsMobile(mobile);
//       if (!mobile) {
//         setMobileActive(false);
//         setSidebarCollapsed(false);
//       } else {
//         setSidebarCollapsed(false);
//         setMobileActive(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Handles closing any open popup when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isMobile &&
//         mobileActive &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         !event.target.closest(".toggle-btn")
//       ) {
//         setMobileActive(false);
//       }

//       if (openPopup) {
//         const isClickOutside = (popupRef, iconRef) =>
//           popupRef.current &&
//           !popupRef.current.contains(event.target) &&
//           iconRef.current &&
//           !iconRef.current.contains(event.target);

//         if (
//           (openPopup === "profile" && isClickOutside(profilePopupRef, profileIconRef)) ||
//           (openPopup === "notification" && isClickOutside(notificationPopupRef, notificationIconRef)) ||
//           (openPopup === "message" && isClickOutside(messagePopupRef, messageIconRef))
//         ) {
//           setOpenPopup(null);
//         }
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [openPopup, isMobile, mobileActive]);

//   const toggleSidebar = () => {
//     if (isMobile) {
//       setMobileActive(!mobileActive);
//     } else {
//       setSidebarCollapsed(!sidebarCollapsed);
//     }
//     setOpenPopup(null);
//     if (!sidebarCollapsed) {
//         setActiveParentMenu(null);
//         setActiveSubMenu(null);
//     }
//   };
  
//   // Toggles a specific popup, ensuring only one is open at a time
//   const togglePopup = (popupName) => {
//     setOpenPopup(prev => prev === popupName ? null : popupName);
//   }

//   const handleParentMenuClick = (menuKey) => {
//     if (!isMobile && sidebarCollapsed) {
//       setSidebarCollapsed(false);
//       setTimeout(() => {
//         setActiveParentMenu((prev) => (prev === menuKey ? null : menuKey));
//         setActiveSubMenu(null);
//       }, 300);
//     } else {
//       setActiveParentMenu((prev) => (prev === menuKey ? null : menuKey));
//       setActiveSubMenu(null);
//     }
//   };

//   const handleSubMenuClick = (e, menuKey) => {
//     e.stopPropagation();
//     setActiveSubMenu((prev) => (prev === menuKey ? null : menuKey));
//   };
//   const handleTopLevelLinkClick = () => {
//     setActiveParentMenu(null);
//     setActiveSubMenu(null);
//   };
  
//   const showSmallLogo = sidebarCollapsed || isMobile;
//   const showLargeLogo = !sidebarCollapsed && !isMobile;

//   return (
//     <div className="app-wrapper">
//       <div className="navbar">
//         <div className="navbar-left">
//           <button className="toggle-btn" onClick={toggleSidebar}>
//             {isMobile && mobileActive ? <FaTimes /> : <FaBars />}
//           </button>
//           <div className="logo">
//             {showLargeLogo && <img src="../src/assets/logo.png" alt="logo" className="logo-large" onError={(e) => { e.target.onerror = null; e.target.src = "../src/assets/logo-small.png"; }} />}
//             {showSmallLogo && <img src="../src/assets/logo-small.png" alt="logo" className="logo-small" onError={(e) => { e.target.onerror = null; e.target.src = "../src/assets/small-logo.png"; }} />}
//           </div>
//         </div>
//         <div className="navbar-right">
//           <FaBell ref={notificationIconRef} className={`navbar-icon ${openPopup === 'notification' ? 'active' : ''}`} onClick={() => togglePopup('notification')} />
//           <FaEnvelope ref={messageIconRef} className={`navbar-icon ${openPopup === 'message' ? 'active' : ''}`} onClick={() => togglePopup('message')} />
//           <FaUserCircle ref={profileIconRef} className={`navbar-icon ${openPopup === 'profile' ? 'active' : ''}`} onClick={() => togglePopup('profile')} />

//           {openPopup === 'notification' && (
//             <div ref={notificationPopupRef} className="profile-popup">
//               <div className="popup-welcome">Notifications</div>
//               <div className="popup-item">New user registered.</div>
//               <div className="popup-item">Your report is ready.</div>
//             </div>
//           )}
//           {openPopup === 'message' && (
//             <div ref={messagePopupRef} className="profile-popup">
//               <div className="popup-welcome">Messages</div>
//               <div className="popup-item">From: Jane Doe</div>
//             </div>
//           )}
//           {openPopup === 'profile' && (
//             <div ref={profilePopupRef} className="profile-popup">
//               <div className="popup-welcome">Welcome</div>
//               <div className="popup-item"><FaUserCircle /> Profile</div>
//               <div className="popup-item"><FaUserCog /> Settings</div>
//               <div className="popup-item"><FaSignOutAlt /> Logout</div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="content-and-sidebar-wrapper">
//         <div ref={sidebarRef} className={`sidebar ${sidebarCollapsed ? "collapsed" : ""} ${mobileActive ? "active-mobile" : ""}`}>
//           <div className="menu-section">
//             {/* Dashboard */}
//             <Link to="/dashboard" className="menu-item" onClick={handleTopLevelLinkClick}>
//               <FaClock />
//               <span>Dashboard</span>
//             </Link>
//             {/* New */}
//             <div className={`menu-item ${activeParentMenu === "new" ? "active-parent" : ""}`} onClick={() => handleParentMenuClick("new")}>
//               <FaPlusSquare /><span>New</span>
//               {(!sidebarCollapsed || mobileActive) && (activeParentMenu === "new" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
//             </div>
//             <div className={`submenu ${activeParentMenu === "new" ? "open" : ""}`}>
//               <Link to="/add/add-member" className="submenu-item"><FaUserFriends /><span>Add Member</span></Link>
             
       
            
//               <div className={`submenu nested ${activeSubMenu === "new_summary" ? "open" : ""}`}>
//                 <Link to="/add/summary/create-sabha-summary" className="nested-submenu-item">Create Sabha Summary</Link>
//                 <Link to="/add/summary/create-satsang-summary" className="nested-submenu-item">Create Satsang Summary</Link>
//               </div>
            
              
//               <div className={`menu-item ${activeSubMenu === "new_brahmanirzer" ? "active-sub" : ""}`} onClick={(e) => handleSubMenuClick(e, "new_brahmanirzer")}>
//                 <FaPencilRuler /><span>Brahmanirzer</span>
//                 {(!sidebarCollapsed || mobileActive) && (activeSubMenu === "new_brahmanirzer" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
//               </div>
//               <div className={`submenu nested ${activeSubMenu === "new_brahmanirzer" ? "open" : ""}`}>
//                 <Link to="/add/brahmanirzer/add-brahmanirzar-grahak" className="nested-submenu-item">Add Brahmanirzar Grahak</Link>
//               </div>
              
//             </div>

//             {/* Manage */}
//             <div className={`menu-item ${activeParentMenu === "manage" ? "active-parent" : ""}`} onClick={() => handleParentMenuClick("manage")}>
//               <FaTasks /><span>Manage</span>
//               {(!sidebarCollapsed || mobileActive) && (activeParentMenu === "manage" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
//             </div>
//             <div className={`submenu ${activeParentMenu === "manage" ? "open" : ""}`}>
//               <Link to="/manage/update-member" className="submenu-item"><FaUserFriends /><span>Update Member</span></Link>
             
              
             
             
//               <div className={`menu-item ${activeSubMenu === "manage_brahmanirzer" ? "active-sub" : ""}`} onClick={(e) => handleSubMenuClick(e, "manage_brahmanirzer")}>
//                 <FaPencilRuler /><span>Brahmanirzer</span>
//                 {(!sidebarCollapsed || mobileActive) && (activeSubMenu === "manage_brahmanirzer" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
//               </div>
//               <div className={`submenu nested ${activeSubMenu === "manage_brahmanirzer" ? "open" : ""}`}>
//                   <Link to="/manage/brahmanirzer/update-brahmanirzar-grahak" className="nested-submenu-item">Update Brahmanirzar Grahak</Link>
//               </div>
             
             
//             </div>
//             {/* Reports */}
//             <div className={`menu-item ${activeParentMenu === "reports" ? "active-parent" : ""}`} onClick={() => handleParentMenuClick("reports")}>
//               <FaChartBar /><span>Reports</span>
//               {(!sidebarCollapsed || mobileActive) && (activeParentMenu === "reports" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
//             </div>
//             <div className={`submenu ${activeParentMenu === "reports" ? "open" : ""}`}>
//               <div className={`menu-item ${activeSubMenu === "reports_brahmanirzer" ? "active-sub" : ""}`} onClick={(e) => handleSubMenuClick(e, "reports_brahmanirzer")}>
//                 <FaPencilRuler /><span>Brahmanirzer</span>
//                 {(!sidebarCollapsed || mobileActive) && (activeSubMenu === "reports_brahmanirzer" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
//               </div>
//               <div className={`submenu nested ${activeSubMenu === "reports_brahmanirzer" ? "open" : ""}`}>
//                   <Link to="/reports/brahmanirzer/brahmanirzar-patrika" className="nested-submenu-item">Brahmanirzar Patrika</Link>
//               </div>
             
             
//               <Link to="/reports/system-user-list" className="submenu-item"><FaUserSecret /><span>System User List</span></Link>
//               <div className={`menu-item ${activeSubMenu === "reports_other" ? "active-sub" : ""}`} onClick={(e) => handleSubMenuClick(e, "reports_other")}>
//                 <FaHandshake /><span>Other</span>
//                 {(!sidebarCollapsed || mobileActive) && (activeSubMenu === "reports_other" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
//               </div>
//               <div className={`submenu nested ${activeSubMenu === "reports_other" ? "open" : ""}`}>
//                   <Link to="/reports/other/connector-organization" className="nested-submenu-item">Connector Organization</Link>
//                   <Link to="/reports/other/well-wishers" className="nested-submenu-item">Well Wishers</Link>
//                   <Link to="/reports/other/visitors" className="nested-submenu-item">Visitors</Link>
//               </div>
//             </div>

//             {/* Communication */}
//             <Link to="/communication" className="menu-item-link">
//               <div className="menu-item"><FaBullhorn /><span>Communication</span></div>
//             </Link>
//           </div>
//         </div>

//         <div className={`main-content ${sidebarCollapsed && !isMobile ? 'collapsed-margin' : ''}`}>
//           <h1>Dashboard</h1>
//           <p>Welcome to the main content area.</p>
//         </div>
//       </div>
//       <AppFooter />
//     </div>
//   );
// };

// export default Sidebar;



import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Link is for navigation without full page reload
// Import all necessary icons
import {
  FaClock, FaPlusSquare, FaTasks, FaChartBar, FaBullhorn, FaChevronDown, FaChevronUp,
  FaUserFriends, FaPencilRuler, FaUserSecret, FaHandshake, FaBookOpen
} from "react-icons/fa";

// Sidebar receives many props from MainLayout to control its behavior and appearance
const Sidebar = ({
  sidebarCollapsed, mobileActive, isMobile,
  setActiveParentMenu, setActiveSubMenu,
  activeParentMenu, activeSubMenu,
  setMobileActive, // Used for closing mobile sidebar on outside click
  handleParentMenuClick, handleSubMenuClick, handleTopLevelLinkClick
}) => {
  const sidebarRef = useRef(null); // Ref to the sidebar div for click-outside detection

  // Effect to close the mobile sidebar if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile && // Only relevant on mobile
        mobileActive && // Only if the mobile sidebar is currently active
        sidebarRef.current && // Check if sidebar element exists
        !sidebarRef.current.contains(event.target) && // Click was NOT inside sidebar
        !event.target.closest(".toggle-btn") // Click was NOT on the toggle button itself (handled by Navbar)
      ) {
        setMobileActive(false); // Deactivate mobile sidebar
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, mobileActive, setMobileActive]); // Dependencies

  return (
    // The sidebar div. Classes 'collapsed' and 'active-mobile' control its appearance via CSS.
    <div ref={sidebarRef} className={`sidebar ${sidebarCollapsed ? "collapsed" : ""} ${mobileActive ? "active-mobile" : ""}`}>
      <div className="menu-section">
        {/* Dashboard Link (a top-level link) */}
        <Link to="/dashboard" className="menu-item" onClick={handleTopLevelLinkClick}>
          <FaClock />
          <span>Dashboard</span>
        </Link>

        {/* "New" Parent Menu Item */}
        <div className={`menu-item ${activeParentMenu === "new" ? "active-parent" : ""}`} onClick={() => handleParentMenuClick("new")}>
          <FaPlusSquare /><span>New</span>
          {/* Chevron icon changes based on whether the menu is open */}
          {(!sidebarCollapsed || mobileActive) && (activeParentMenu === "new" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
        </div>
        {/* "New" Submenu (conditionally rendered and styled based on activeParentMenu) */}
        <div className={`submenu ${activeParentMenu === "new" ? "open" : ""}`}>
          <Link to="/add/add-visitor" className="submenu-item"><FaUserFriends /><span>Add Visitor</span></Link>
          <Link to="/add/add-guest-visitor" className="submenu-item"><FaUserFriends /><span>Add Guest Visitor</span></Link>
          {/* Nested Submenu for "Brahmanirzer" under "New" */}
        </div>

        {/* "Manage" Parent Menu Item */}
        <div className={`menu-item ${activeParentMenu === "manage" ? "active-parent" : ""}`} onClick={() => handleParentMenuClick("manage")}>
          <FaTasks /><span>Manage</span>
          {(!sidebarCollapsed || mobileActive) && (activeParentMenu === "manage" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
        </div>
        <div className={`submenu ${activeParentMenu === "manage" ? "open" : ""}`}>
          <Link to="/manage/update-visitor" className="submenu-item"><FaUserFriends /><span>Update Visitor</span></Link>
          <Link to="/manage/update-guest-visitor" className="submenu-item"><FaUserFriends /><span>Update Guest Visitor</span></Link>


 <div className={`menu-item ${activeSubMenu === "reports_brahmanirzer" ? "active-sub" : ""}`} onClick={(e) => handleSubMenuClick(e, "reports_brahmanirzer")}>
            <FaPencilRuler /><span>Manage Admins</span>
            {(!sidebarCollapsed || mobileActive) && (activeSubMenu === "reports_brahmanirzer" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
          </div>
          <div className={`submenu nested ${activeSubMenu === "reports_brahmanirzer" ? "open" : ""}`}>
              <Link to="/manage/update-kitchen-admin" className="nested-submenu-item">Kitchen Admin</Link>
              <Link to="/manage/update-transport-admin" className="nested-submenu-item">Transport Admin</Link>
              <Link to="/manage/update-accomodation-admin" className="nested-submenu-item">Accommodation Admin</Link>
              <Link to="/manage/update-comitee-chairman" className="nested-submenu-item">Commitee Chairman</Link>
              <Link to="/manage/update-seva-cordinator" className="nested-submenu-item">Seva Coordinator</Link>
          </div>


        </div>

        {/* "Reports" Parent Menu Item */}
        <div className={`menu-item ${activeParentMenu === "reports" ? "active-parent" : ""}`} onClick={() => handleParentMenuClick("reports")}>
          <FaChartBar /><span>Reports</span>
          {(!sidebarCollapsed || mobileActive) && (activeParentMenu === "reports" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
        </div>
        <div className={`submenu ${activeParentMenu === "reports" ? "open" : ""}`}>
          {/* Nested Submenu for "Brahmanirzer" under "Reports" */}
          

<div className={`menu-item ${activeSubMenu === "reports_brahmanirzer" ? "active-sub" : ""}`} onClick={(e) => handleSubMenuClick(e, "reports_brahmanirzer")}>
            <FaPencilRuler /><span>Admin Report</span>
            {(!sidebarCollapsed || mobileActive) && (activeSubMenu === "reports_brahmanirzer" ? <FaChevronUp className="arrow open" /> : <FaChevronDown className="arrow" />)}
          </div>
          <div className={`submenu nested ${activeSubMenu === "reports_brahmanirzer" ? "open" : ""}`}>
              <Link to="/reports/admin/kitchen" className="nested-submenu-item">Kitchen Admin</Link>
              <Link to="/reports/admin/transport" className="nested-submenu-item">Transport Admin</Link>
              <Link to="/reports/admin/accomodation" className="nested-submenu-item">Accommodation Admin</Link>
              <Link to="/reports/admin/comitee" className="nested-submenu-item">Commitee Chairman</Link>
              <Link to="/reports/admin/seva" className="nested-submenu-item">Seva Coordinator</Link>
          </div>



          <Link to="/reports/system-user-list" className="submenu-item"><FaUserSecret /><span>System User List</span></Link>
        </div>

        {/* "Communication" Top-Level Link */}
        <Link to="/communication" className="menu-item-link">
          <div className="menu-item"><FaBullhorn /><span>Communication</span></div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;