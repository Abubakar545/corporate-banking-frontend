import React, { useState } from 'react';
import axios from '../../api/api.js';
import '../../css/LoanApplication/loan-application-form.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import Link for navigation

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    clientId: '',
    loanType: '',
    loanAmount: '',
    applicationStatus: 'PENDING', // Default status
    submissionDate: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8071/api/v1/loan-applications', formData); // Update with your backend API URL
      setSuccessMessage('Loan application submitted successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      setErrorMessage('Failed to submit the loan application.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="loan-application-form">
      <header className="loan-application-header">
        <Link to="/" className="nav-button">Home</Link>
        {/* <Link to="/" className="nav-button">Previous</Link> */}
        <Link to="/loan-review" className="nav-button">Next</Link>
      </header>
      <h2>Loan Application Form</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clientId">Client ID:</label>
          <input
            type="number"
            id="clientId"
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanType">Loan Type:</label>
          <select
            id="loanType"
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            required
          >
            <option value="">Select Loan Type</option>
            <option value="PERSONAL">Personal</option>
            <option value="AUTO">Auto</option>
            <option value="HOME">Home</option>
            <option value="BUSINESS">Business</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="submissionDate">Submission Date:</label>
          <input
            type="date"
            id="submissionDate"
            name="submissionDate"
            value={formData.submissionDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="applicationStatus">Application Status:</label>
          <input
            type="text"
            id="applicationStatus"
            name="applicationStatus"
            value={formData.applicationStatus}
            readOnly
          />
        </div>

        <button type="submit" className="submit-button">Submit Application</button>
      </form>

    </div>
  );
};

export default LoanApplicationForm;
