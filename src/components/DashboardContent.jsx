import React from "react";

const DashboardContent = () => {
  return (
    <> {/* Fragment: A way to group multiple elements without adding an extra div */}
      <h1>Dashboard</h1>
      <p>Welcome to the main content area. This is specific to the Dashboard page.</p>
      {/* You would add charts, widgets, summaries, etc., here for your dashboard */}
      <p>This content changes when you click a different link in the sidebar.</p>
    </>
  );
};

export default DashboardContent;