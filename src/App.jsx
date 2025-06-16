// import { useState } from 'react'
// import './App.css'
// import Home from './pages/Home'


// function App() {


//   return (
//     <>
// <Home/>

//        </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout'; // The component that arranges Navbar, Sidebar, Footer
// import DashboardContent from './components/DashboardContent'; // Content for the dashboard page
import Home from './pages/Home'
// --- Import other page components (you'll create these files later) ---

import './app.css'; // Don't forget to import your main CSS file
import Dashboard from './pages/Dashboard';
import AddVisitor from './pages/New/AddVisitor';
import AddGuestVisitor from './pages/New/AddGuestVisitor';
import UpdateVisitor from './pages/Manage/UpdateVisitor';
import UpdateGuestVisitor from './pages/Manage/UpdateGuestVisitor';
import KitchenAdmin from './pages/Manage/ManageAdmins/KitchenAdmin';
import TransportAdmin from './pages/Manage/ManageAdmins/TransportAdmin';
import AccommodationAdmin from './pages/Manage/ManageAdmins/AccommodationAdmin';
import CommiteeChairman from './pages/Manage/ManageAdmins/CommiteeChairman';
import SevaCoordinator from './pages/Manage/ManageAdmins/SevaCoordinator';
import AccommodationAdminReport from './pages/Reports/Admin/AccommodationAdminReport';
import KitchenAdminReport from './pages/Reports/Admin/KitchenAdminReport';
import TransportAdminReport from './pages/Reports/Admin/TransportAdminReport';
import CommiteeChairmanReport from './pages/Reports/Admin/CommiteeChairmanReport';
import SevaCoordinatorReport from './pages/Reports/Admin/SevaCoordinatorReport';
import SystemUserList from './pages/Reports/SystemUserList';
import Communication from './pages/Communication';

function App() {
  return (

      <Routes> 
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<DashboardContent />} />  */}
          {/* <Route path="dashboard" element={<DashboardContent />} /> */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          {/* Nested routes for "New" section */}
          <Route path="add/add-visitor" element={<AddVisitor />} />
          <Route path="add/add-guest-visitor" element={<AddGuestVisitor />} />
          {/* Nested routes for "Manage" section */}

          <Route path="manage/update-visitor" element={<UpdateVisitor />} />
          <Route path="manage/update-guest-visitor" element={<UpdateGuestVisitor />} />
          <Route path="manage/update-kitchen-admin" element={<KitchenAdmin />} />
          <Route path="manage/update-transport-admin" element={<TransportAdmin />} />
          <Route path="manage/update-accomodation-admin" element={<AccommodationAdmin />} />
          <Route path="manage/update-comitee-chairman" element={<CommiteeChairman />} />
          <Route path="manage/update-seva-cordinator" element={<SevaCoordinator />} />
         

          
          <Route path="reports/admin/kitchen" element={< KitchenAdminReport/>} />
          <Route path="reports/admin/transport" element={< TransportAdminReport/>} />
          <Route path="reports/admin/accomodation" element={< AccommodationAdminReport/>} />
          <Route path="reports/admin/comitee" element={< CommiteeChairmanReport/>} />
          <Route path="reports/admin/seva" element={< SevaCoordinatorReport/>} />
          <Route path="reports/system-user-list" element={< SystemUserList/>} />
       
      <Route path="/communication" element={<Communication/>}/>

        </Route>
      </Routes>

  );
}

export default App;