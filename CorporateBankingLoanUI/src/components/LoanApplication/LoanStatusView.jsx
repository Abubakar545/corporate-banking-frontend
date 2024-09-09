import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import api from '../../api/api.js';
import '../../css/LoanApplication/loan-status-view.css';

function LoanStatusView() {
  const [loanStatus, setLoanStatus] = useState([]);

  useEffect(() => {
    const fetchLoanStatus = async () => {
      try {
        const response = await api.get('http://localhost:8072/api/v1/loan-disbursements/all');
        setLoanStatus(response.data);
      } catch (error) {
        console.error('Error fetching loan status:', error);
      }
    };
    fetchLoanStatus();
  }, []);

  return (
    <div className="loan-status">
      <header className="loan-status-header">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/loan-application" className="nav-button">Previous</Link>
        <Link to="/loan-disbursement" className="nav-button">Next</Link>
      </header>
      <h2>Loan Status</h2>
      <table>
        <thead>
          <tr>
            <th>Loan Application ID</th>
            <th>Status</th>
            <th>Approval Comments</th>
          </tr>
        </thead>
        <tbody>
          {loanStatus.map((loan) => (
            <tr key={loan.loanApplicationId}>
              <td>{loan.loanApplicationId}</td>
              <td>{loan.status}</td>
              <td>{loan.approvalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanStatusView;
