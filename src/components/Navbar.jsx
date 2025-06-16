import React, { useRef, useEffect } from "react";
// Import icons from react-icons/fa
import { FaBars, FaBell, FaEnvelope, FaUserCircle, FaTimes, FaUserCog, FaSignOutAlt } from "react-icons/fa";

// Navbar receives props (data/functions from its parent, MainLayout)
const Navbar = ({ toggleSidebar, isMobile, mobileActive, openPopup, togglePopup, sidebarCollapsed }) => {
  // useRef hooks to reference specific elements for click-outside detection
  const notificationIconRef = useRef(null);
  const notificationPopupRef = useRef(null);
  const messageIconRef = useRef(null);
  const messagePopupRef = useRef(null);
  const profileIconRef = useRef(null);
  const profilePopupRef = useRef(null);

  // useEffect to handle closing popups when clicking anywhere else on the screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Helper function to check if a click was outside a specific popup and its icon
      const isClickOutside = (popupRef, iconRef) =>
        popupRef.current && // Check if popup exists
        !popupRef.current.contains(event.target) && // Check if click was NOT inside popup
        iconRef.current && // Check if icon exists
        !iconRef.current.contains(event.target); // Check if click was NOT inside icon

      // If any popup is open and the click was outside that popup AND its icon, close it
      if (
        (openPopup === "profile" && isClickOutside(profilePopupRef, profileIconRef)) ||
        (openPopup === "notification" && isClickOutside(notificationPopupRef, notificationIconRef)) ||
        (openPopup === "message" && isClickOutside(messagePopupRef, messageIconRef))
      ) {
        togglePopup(null); // Call the function from MainLayout to close the popup
      }
    };
    document.addEventListener("mousedown", handleClickOutside); // Add listener when component mounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Remove listener when component unmounts
    };
  }, [openPopup, togglePopup]); // Re-run effect if openPopup or togglePopup changes

  // Determine which logo to show based on sidebar state and screen size
  const showSmallLogo = sidebarCollapsed || isMobile;
  const showLargeLogo = !sidebarCollapsed && !isMobile;

  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Toggle button for sidebar. Changes icon based on mobile active state. */}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isMobile && mobileActive ? <FaTimes /> : <FaBars />}
        </button>
        <div className="logo">
          {/* Dynamically show large or small logo */}
          {showLargeLogo && <img src="../src/assets/logo.png" alt="logo" className="logo-large" onError={(e) => { e.target.onerror = null; e.target.src = "../src/assets/logo-small.png"; }} />}
          {showSmallLogo && <img src="../src/assets/logo-small.png" alt="logo" className="logo-small" onError={(e) => { e.target.onerror = null; e.target.src = "../src/assets/small-logo.png"; }} />}
        </div>
      </div>
      <div className="navbar-right">
        {/* Notification Icon and Popup */}
        <FaBell ref={notificationIconRef} className={`navbar-icon ${openPopup === 'notification' ? 'active' : ''}`} onClick={() => togglePopup('notification')} />
        {openPopup === 'notification' && (
          <div ref={notificationPopupRef} className="profile-popup">
            <div className="popup-welcome">Notifications</div>
            <div className="popup-item">New user registered.</div>
            <div className="popup-item">Your report is ready.</div>
          </div>
        )}

        {/* Message Icon and Popup */}
        <FaEnvelope ref={messageIconRef} className={`navbar-icon ${openPopup === 'message' ? 'active' : ''}`} onClick={() => togglePopup('message')} />
        {openPopup === 'message' && (
          <div ref={messagePopupRef} className="profile-popup">
            <div className="popup-welcome">Messages</div>
            <div className="popup-item">From: Jane Doe</div>
          </div>
        )}

        {/* Profile Icon and Popup */}
        <FaUserCircle ref={profileIconRef} className={`navbar-icon ${openPopup === 'profile' ? 'active' : ''}`} onClick={() => togglePopup('profile')} />
        {openPopup === 'profile' && (
          <div ref={profilePopupRef} className="profile-popup">
            <div className="popup-welcome">Welcome</div>
            <div className="popup-item"><FaUserCircle /> Profile</div>
            <div className="popup-item"><FaUserCog /> Settings</div>
            <div className="popup-item"><FaSignOutAlt /> Logout</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;