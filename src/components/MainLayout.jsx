// import React, { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom"; // To render child routes here

// // Import our custom components
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import AppFooter from "./AppFooter";

// const MainLayout = () => {
//   // State variables: These hold data that can change and affect how components look
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // Is sidebar hidden?
//   const [mobileActive, setMobileActive] = useState(false);     // Is sidebar active on mobile?
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Are we on a mobile screen?
//   const [openPopup, setOpenPopup] = useState(null);           // Which popup (profile, notification, message) is open?
//   const [activeParentMenu, setActiveParentMenu] = useState(null); // Which main menu item is open?
//   const [activeSubMenu, setActiveSubMenu] = useState(null);   // Which sub-menu item is open?

//   // useEffect: A special React function that runs code after the component renders
//   // Here, it manages screen resizing to adjust layout for mobile vs. desktop
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth <= 768; // Check if screen width is small enough for mobile
//       setIsMobile(mobile);
//       if (!mobile) {
//         // If not mobile, ensure sidebar is not collapsed or active
//         setMobileActive(false);
//         setSidebarCollapsed(false);
//       } else {
//         // If mobile, ensure sidebar starts closed
//         setSidebarCollapsed(false);
//         setMobileActive(false);
//       }
//     };
//     window.addEventListener("resize", handleResize); // Listen for window resizing
//     handleResize(); // Call once initially to set the correct state
//     return () => window.removeEventListener("resize", handleResize); // Clean up the listener when component unmounts
//   }, []); // Empty array means this effect runs once after initial render and cleans up on unmount

//   // Function to toggle sidebar (open/close)
//   const toggleSidebar = () => {
//     if (isMobile) {
//       setMobileActive(!mobileActive); // On mobile, activate/deactivate the mobile sidebar
//     } else {
//       setSidebarCollapsed(!sidebarCollapsed); // On desktop, collapse/expand the sidebar
//     }
//     setOpenPopup(null); // Close any open popups when sidebar is toggled
//     if (!sidebarCollapsed) { // If collapsing, close all menu items
//         setActiveParentMenu(null);
//         setActiveSubMenu(null);
//     }
//   };

//   // Function to toggle specific popups (notification, message, profile)
//   const togglePopup = (popupName) => {
//     // If the clicked popup is already open, close it. Otherwise, open it.
//     setOpenPopup(prev => prev === popupName ? null : popupName);
//   };

//   // Function to handle clicking a parent menu item in the sidebar
//   const handleParentMenuClick = (menuKey) => {
//     if (!isMobile && sidebarCollapsed) {
//       // If sidebar is collapsed on desktop, uncollapse it first
//       setSidebarCollapsed(false);
//       // Then, after a small delay (for animation), toggle the menu
//       setTimeout(() => {
//         setActiveParentMenu((prev) => (prev === menuKey ? null : menuKey));
//         setActiveSubMenu(null); // Close any sub-menus
//       }, 300); 
//     } else {
//       // Directly toggle the parent menu
//       setActiveParentMenu((prev) => (prev === menuKey ? null : menuKey));
//       setActiveSubMenu(null); // Close any sub-menus
//     }
//   };

//   // Function to handle clicking a sub-menu item in the sidebar
//   const handleSubMenuClick = (e, menuKey) => {
//     e.stopPropagation(); // Stop the click from bubbling up to parent menu
//     setActiveSubMenu((prev) => (prev === menuKey ? null : menuKey));
//   };
  
//   // Function to close all menus when a top-level link is clicked (e.g., Dashboard)
//   const handleTopLevelLinkClick = () => {
//     setActiveParentMenu(null);
//     setActiveSubMenu(null);
//   };

//   return (
//     <div className="app-wrapper">
//       {/* Navbar component: Pass down state and functions it needs */}
//       <Navbar
//         toggleSidebar={toggleSidebar}
//         isMobile={isMobile}
//         mobileActive={mobileActive}
//         openPopup={openPopup}
//         togglePopup={togglePopup}
//         sidebarCollapsed={sidebarCollapsed}
//       />

//       <div className="content-and-sidebar-wrapper">
//         {/* Sidebar component: Pass down state and functions it needs */}
//         <Sidebar
//           sidebarCollapsed={sidebarCollapsed}
//           mobileActive={mobileActive}
//           isMobile={isMobile}
//           setActiveParentMenu={setActiveParentMenu}
//           setActiveSubMenu={setActiveSubMenu}
//           activeParentMenu={activeParentMenu}
//           activeSubMenu={activeSubMenu}
//           toggleSidebar={toggleSidebar} // Passed for mobile click-outside logic if needed
//           setMobileActive={setMobileActive} // Passed for mobile click-outside logic
//           setSidebarCollapsed={setSidebarCollapsed} // Passed for collapsed sidebar animation
//           handleParentMenuClick={handleParentMenuClick}
//           handleSubMenuClick={handleSubMenuClick}
//           handleTopLevelLinkClick={handleTopLevelLinkClick}
//         />

//         {/* Main Content Area: Where the actual page content (Dashboard, Add Member etc.) will render */}
//         {/* The 'collapsed-margin' class dynamically adjusts the margin when the sidebar is collapsed */}
//         <div className={`main-content ${sidebarCollapsed && !isMobile ? 'collapsed-margin' : ''}`}>
//           <Outlet /> {/* This is a placeholder for the content from the current route */}
//         </div>
//       </div>
      
//       {/* AppFooter component */}
//       <AppFooter />
//     </div>
//   );
// };

// export default MainLayout;



// src/MainLayout.jsx
// import React, { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";

// // Import our custom components
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import AppFooter from "./AppFooter";
// import PageHeader from "./PageHeader"; // <--- Import the new component

// const MainLayout = () => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [mobileActive, setMobileActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [openPopup, setOpenPopup] = useState(null);
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

//   const toggleSidebar = () => {
//     if (isMobile) {
//       setMobileActive(!mobileActive);
//     } else {
//       setSidebarCollapsed(!sidebarCollapsed);
//     }
//     setOpenPopup(null);
//     if (!sidebarCollapsed) {
//       setActiveParentMenu(null);
//       setActiveSubMenu(null);
//     }
//   };

//   const togglePopup = (popupName) => {
//     setOpenPopup(prev => prev === popupName ? null : popupName);
//   };

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

//   return (
//     <div className="app-wrapper">
//       <Navbar
//         toggleSidebar={toggleSidebar}
//         isMobile={isMobile}
//         mobileActive={mobileActive}
//         openPopup={openPopup}
//         togglePopup={togglePopup}
//         sidebarCollapsed={sidebarCollapsed}
//       />

//       {/* Place the PageHeader component here */}
//       <PageHeader
//         sidebarCollapsed={sidebarCollapsed}
//         isMobile={isMobile}
//       />

//       <div className="content-and-sidebar-wrapper">
//         <Sidebar
//           sidebarCollapsed={sidebarCollapsed}
//           mobileActive={mobileActive}
//           isMobile={isMobile}
//           setActiveParentMenu={setActiveParentMenu}
//           setActiveSubMenu={setActiveSubMenu}
//           activeParentMenu={activeParentMenu}
//           activeSubMenu={activeSubMenu}
//           toggleSidebar={toggleSidebar}
//           setMobileActive={setMobileActive}
//           setSidebarCollapsed={setSidebarCollapsed}
//           handleParentMenuClick={handleParentMenuClick}
//           handleSubMenuClick={handleSubMenuClick}
//           handleTopLevelLinkClick={handleTopLevelLinkClick}
//         />

//         <div className={`main-content ${sidebarCollapsed && !isMobile ? 'collapsed-margin' : ''}`}>
//           <Outlet />
//         </div>
//       </div>

//       <AppFooter />
//     </div>
//   );
// };

// export default MainLayout;




// src/MainLayout.jsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// Import our custom components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AppFooter from "./AppFooter";
import PageHeader from "./PageHeader"; // <--- Import the new component

const MainLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openPopup, setOpenPopup] = useState(null);
  const [activeParentMenu, setActiveParentMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileActive(false);
        setSidebarCollapsed(false);
      } else {
        setSidebarCollapsed(false);
        setMobileActive(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileActive(!mobileActive);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
    setOpenPopup(null);
    if (!sidebarCollapsed) {
      setActiveParentMenu(null);
      setActiveSubMenu(null);
    }
  };

  const togglePopup = (popupName) => {
    setOpenPopup(prev => prev === popupName ? null : popupName);
  };

  const handleParentMenuClick = (menuKey) => {
    if (!isMobile && sidebarCollapsed) {
      setSidebarCollapsed(false);
      setTimeout(() => {
        setActiveParentMenu((prev) => (prev === menuKey ? null : menuKey));
        setActiveSubMenu(null);
      }, 300);
    } else {
      setActiveParentMenu((prev) => (prev === menuKey ? null : menuKey));
      setActiveSubMenu(null);
    }
  };

  const handleSubMenuClick = (e, menuKey) => {
    e.stopPropagation();
    setActiveSubMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const handleTopLevelLinkClick = () => {
    setActiveParentMenu(null);
    setActiveSubMenu(null);
  };

  return (
    <div className="app-wrapper">
      <Navbar
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
        mobileActive={mobileActive}
        openPopup={openPopup}
        togglePopup={togglePopup}
        sidebarCollapsed={sidebarCollapsed}
      />

      {/* Place the PageHeader component here, outside the content-and-sidebar-wrapper */}
      <PageHeader
        sidebarCollapsed={sidebarCollapsed}
        isMobile={isMobile}
      />

      <div className="content-and-sidebar-wrapper">
        <Sidebar
          sidebarCollapsed={sidebarCollapsed}
          mobileActive={mobileActive}
          isMobile={isMobile}
          setActiveParentMenu={setActiveParentMenu}
          setActiveSubMenu={setActiveSubMenu}
          activeParentMenu={activeParentMenu}
          activeSubMenu={activeSubMenu}
          toggleSidebar={toggleSidebar}
          setMobileActive={setMobileActive}
          setSidebarCollapsed={setSidebarCollapsed}
          handleParentMenuClick={handleParentMenuClick}
          handleSubMenuClick={handleSubMenuClick}
          handleTopLevelLinkClick={handleTopLevelLinkClick}
        />

        {/* The main-content needs to also adjust its top margin to account for the fixed header */}
        <div className={`main-content ${sidebarCollapsed && !isMobile ? 'collapsed-margin' : ''}`}>
          <Outlet />
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default MainLayout;