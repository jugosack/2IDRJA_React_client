import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="error-page">
    <div className="background-wallapper">
      <div className="error-content">
        <h1 className="error-title">Error</h1>
        <p className="error-message">404 - Page Not Found</p>
        <Link to="/" className="error-link">
          ⬅ Back to Home Page
        </Link>
      </div>
    </div>
  </div>
);

export default ErrorPage;
