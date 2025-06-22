import React from 'react';
import Sidebar from './Sidebar';
import DashboardCard from './DashboardCards';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: '600' }}>Dashboard</h2>
        <DashboardCard />
      </div>
    </div>
  );
};

export default App;
