import React from "react";

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-left-placeholder"></div> {/* Placeholder for left-aligned content if needed */}
      <div className="footer-center-content">
        <a href="https://anoopam.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
          Copyright 2025 by Anoopam Mission
        </a>
      </div>
      <div className="footer-right-content">
        <a
          href="https://www.itcentre.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link footer-dev-credit"
        >
          Developed by ITC | Version 1.0
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;