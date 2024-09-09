import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import api from '../../api/api.js';
import '../../css/LoanApplication/loan-review.css'; // Import the CSS file

function LoanReview() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await api.get('/loan-applications');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
    fetchApplications();
  }, []);

  const handleReview = async (id, status) => {
    try {
      const response = await api.patch(`/loan-applications/${id}`, { status });
      console.log('Application reviewed:', response.data);
      setApplications(applications.filter(app => app.id !== id));
    } catch (error) {
      console.error('Error reviewing application:', error);
    }
  };

  return (
    <div className="loan-review">
      <header className="loan-review-header">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/loan-application" className="nav-button">Previous</Link>
        <Link to="/status-tracking" className="nav-button">Next</Link>
      </header>
      <h2>Loan Application Review</h2>
      {applications.map(app => (
        <div key={app.id} className="application-item">
          <p>Application ID: {app.id} - Amount: {app.amount}</p>
          <button onClick={() => handleReview(app.id, 'approved')}>Approve</button>
          <button onClick={() => handleReview(app.id, 'rejected')}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default LoanReview;
