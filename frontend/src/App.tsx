import React from 'react';
import './index.css';

function App() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo"></div>
          <h2>Pharma SaaS</h2>
        </div>
        <nav className="nav-menu">
          <a href="#" className="nav-item active">Dashboard</a>
          <a href="#" className="nav-item">Inventory</a>
          <a href="#" className="nav-item">Sales</a>
          <a href="#" className="nav-item">Reports</a>
          <a href="#" className="nav-item">Settings</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <div className="search-bar">
            <input type="text" placeholder="Search drugs, barcodes, or patients..." />
          </div>
          <div className="user-profile">
            <div className="avatar">P</div>
            <span>Pharmacist</span>
          </div>
        </header>
        <div className="content-area">
          <header className="page-header">
            <h1>Overview</h1>
            <button className="primary-btn">+ New Sale</button>
          </header>
          
          <div className="metrics-grid">
            <div className="metric-card glassmorphism">
              <h3>Total Drugs</h3>
              <p className="value">1,248</p>
              <div className="trend positive">+12 this week</div>
            </div>
            <div className="metric-card glassmorphism">
              <h3>Low Stock</h3>
              <p className="value warning">15</p>
              <div className="trend negative">Requires attention</div>
            </div>
            <div className="metric-card glassmorphism">
              <h3>Daily Revenue</h3>
              <p className="value">EGP 2,450</p>
              <div className="trend positive">+5% vs yesterday</div>
            </div>
            <div className="metric-card glassmorphism">
              <h3>Prescriptions</h3>
              <p className="value">42</p>
              <div className="trend neutral">Average</div>
            </div>
          </div>

          <div className="recent-section glassmorphism">
            <h2>Expiring Soon</h2>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Drug Name</th>
                    <th>Batch</th>
                    <th>Expiry Date</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amoxicillin 500mg</td>
                    <td>B-1029</td>
                    <td className="warning-text">Oct 2026</td>
                    <td>150</td>
                    <td><button className="text-btn">Review</button></td>
                  </tr>
                  <tr>
                    <td>Panadol Extra</td>
                    <td>C-9921</td>
                    <td className="warning-text">Nov 2026</td>
                    <td>45</td>
                    <td><button className="text-btn">Review</button></td>
                  </tr>
                  <tr>
                    <td>Ibuprofen 400mg</td>
                    <td>A-4432</td>
                    <td className="danger-text">Dec 2026</td>
                    <td>12</td>
                    <td><button className="text-btn">Review</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
