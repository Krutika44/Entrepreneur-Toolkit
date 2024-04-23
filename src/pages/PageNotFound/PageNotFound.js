import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If you're using React Router
import notFoundImage from './Error404.jpg'; // Import your image
import './PageNotFound.css';

const NotFound = () => {
  return (
    <div style={{ 
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src={notFoundImage} alt="Page Not Found" className="not-found-image" />
<Button as={Link} to="/" variant="primary" className="not-found-button">Go Back to Home</Button>

    </div>
  );
};

export default NotFound;
