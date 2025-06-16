// src/components/PageHeader.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageHeader = ({ sidebarCollapsed, isMobile }) => { // Props are already correctly received
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('Dashboard');
  const [breadcrumb, setBreadcrumb] = useState('Home / Dashboard');

  useEffect(() => {
    const path = location.pathname;
    let title = 'Dashboard';
    let crumbs = 'Home / Dashboard';

    // Logic to determine title and breadcrumb based on the current path
    if (path.startsWith('/add')) {
      title = 'Add New';
      crumbs = 'Home / Add';
      if (path === '/add/add-visitor') {
        title = 'Add Visitor';
        crumbs += ' / Add Visitor';
      } else if (path === '/add/add-guest-visitor') {
        title = 'Add Guest Visitor';
        crumbs += ' / Add Guest Visitor';
      }
    } else if (path.startsWith('/manage')) {
      title = 'Manage';
      crumbs = 'Home / Manage';
      if (path === '/manage/update-visitor') {
        title = 'Update Visitor';
        crumbs += ' / Update Visitor';
      } else if (path === '/manage/update-guest-visitor') {
        title = 'Update Guest Visitor';
        crumbs += ' / Update Guest Visitor';
      } else if (path.startsWith('/manage/update-')) { // For nested admin management
        title = 'Manage Admins';
        crumbs += ' / Manage Admins';
        if (path === '/manage/update-kitchen-admin') {
          title = 'Update Kitchen Admin';
          crumbs += ' / Kitchen Admin';
        } else if (path === '/manage/update-transport-admin') {
          title = 'Update Transport Admin';
          crumbs += ' / Transport Admin';
        } else if (path === '/manage/update-accomodation-admin') {
          title = 'Update Accommodation Admin';
          crumbs += ' / Accommodation Admin';
        } else if (path === '/manage/update-comitee-chairman') {
          title = 'Update Committee Chairman';
          crumbs += ' / Committee Chairman';
        } else if (path === '/manage/update-seva-cordinator') {
          title = 'Update Seva Coordinator';
          crumbs += ' / Seva Coordinator';
        }
      }
    } else if (path.startsWith('/reports')) {
      title = 'Reports';
      crumbs = 'Home / Reports';
      if (path.startsWith('/reports/admin')) { // For nested admin reports
        title = 'Admin Reports';
        crumbs += ' / Admin Reports';
        if (path === '/reports/admin/kitchen') {
          title = 'Kitchen Admin Report';
          crumbs += ' / Kitchen Admin';
        } else if (path === '/reports/admin/transport') {
          title = 'Transport Admin Report';
          crumbs += ' / Transport Admin';
        } else if (path === '/reports/admin/accomodation') {
          title = 'Accommodation Admin Report';
          crumbs += ' / Accommodation Admin';
        } else if (path === '/reports/admin/comitee') {
          title = 'Committee Chairman Report';
          crumbs += ' / Committee Chairman';
        } else if (path === '/reports/admin/seva') {
          title = 'Seva Coordinator Report';
          crumbs += ' / Seva Coordinator';
        }
      } else if (path === '/reports/system-user-list') {
        title = 'System User List';
        crumbs += ' / System User List';
      }
    } else if (path === '/communication') {
      title = 'Communication';
      crumbs = 'Home / Communication';
    } else if (path === '/dashboard') {
      title = 'Dashboard';
      crumbs = 'Home / Dashboard';
    }

    setPageTitle(title);
    setBreadcrumb(crumbs);
  }, [location.pathname]);

  return (
    // The conditional class for margin adjustment is still here
    <div className={`page-header ${sidebarCollapsed && !isMobile ? 'collapsed-margin' : ''}`}>
      <div className="page-header-title">
        <h1>{pageTitle}</h1>
      </div>
      <div className="page-header-breadcrumb">
        <span>{breadcrumb}</span>
      </div>
    </div>
  );
};

export default PageHeader;