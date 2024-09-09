// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LoanApplicationForm from './components/LoanApplication/LoanApplicationForm';
import LoanReview from './components/LoanApplication/LoanReview';
import LoanStatusView from './components/LoanApplication/LoanStatusView';
// import LoanDisbursementApproval from './components/LoanApplication/LoanDisbursementApproval';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan-application" element={<LoanApplicationForm />} />
          <Route path="/loan-review" element={<LoanReview />} />
          <Route path="/status-tracking" element={<LoanStatusView />} /> 
          {/* <Route path="/loan-disbursement" element={<LoanDisbursementApproval />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
