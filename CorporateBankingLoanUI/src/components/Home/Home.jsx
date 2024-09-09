import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Corporate Banking Loan Management System</h1>
        <p>Empowering businesses with efficient loan management and financial insights.</p>
      </header>
      <section className="benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefit-list">
          <div className="benefit-item">
            <h3>Comprehensive Loan Management</h3>
            <p>Manage corporate loans from application to disbursement and repayment.</p>
          </div>
          <div className="benefit-item">
            <h3>Streamlined Approval Workflows</h3>
            <p>Multi-level approval processes ensure accurate and timely loan approvals.</p>
          </div>
          <div className="benefit-item">
            <h3>Advanced Reporting and Analytics</h3>
            <p>Gain insights into loan performance and client creditworthiness with detailed reports.</p>
          </div>
          <div className="benefit-item">
            <h3>Robust Security</h3>
            <p>Protected with JWT authentication and encrypted data for your peace of mind.</p>
          </div>
        </div>
      </section>
      <nav className="navigation">
        <ul>
          <li><Link to="/loan-application" className="nav-link">Loan Application</Link></li>
          <li><Link to="/loan-review" className="nav-link">Review</Link></li>
          <li><Link to="/status-tracking" className="nav-link">Status Tracking</Link></li>
          <li><Link to="/loan-disbursement" className="nav-link">Loan Disbursement</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
