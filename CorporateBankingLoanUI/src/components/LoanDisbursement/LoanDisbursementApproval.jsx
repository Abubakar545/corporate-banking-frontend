// LoanDisbursementApproval.jsx
import { useState, useEffect } from 'react';
import api from '../api/api';
import './approval.css';

function LoanDisbursementApproval() {
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    const fetchApprovals = async () => {
      try {
        const response = await api.get('/loan-approvals');
        setApprovals(response.data);
      } catch (error) {
        console.error('Error fetching approvals:', error);
      }
    };
    fetchApprovals();
  }, []);

  const handleApproval = async (id, status) => {
    try {
      const response = await api.patch(`/loan-approvals/${id}`, { status });
      console.log('Approval processed:', response.data);
      setApprovals(approvals.filter(app => app.id !== id));
    } catch (error) {
      console.error('Error processing approval:', error);
    }
  };

  return (
    <div className="loan-approval">
      <h2>Loan Disbursement Approval</h2>
      {approvals.map(app => (
        <div key={app.id}>
          <p>Approval ID: {app.id} - Amount: {app.amount}</p>
          <button onClick={() => handleApproval(app.id, 'approved')}>Approve</button>
          <button onClick={() => handleApproval(app.id, 'rejected')}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default LoanDisbursementApproval;
