import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops! Looks like you ran into an error!</h1>
      <p>Something went wrong. We're sorry for the inconvenience.</p>
      <button onClick={handleGoBack} style={{ marginTop: '20px' }}>
        Go Back to Home
      </button>
    </div>
  );
}

export default ErrorPage;
