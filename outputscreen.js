import React from 'react';
import Header from '../components/header';
import './Result.css';



const Result = () => {
  return (
    <>
      <Header />
      <div className="result-container">
      <h3 className="breadcrumb">
        Home / IVF Success Rate Calculator <span className="highlight">/ Result</span>
      </h3>
        <div className="result-content">
        <div className="line-container">
  <span className="line"></span>
  <h2 className="estimate-text">Your estimated IVF Success Rate is</h2>
</div>
          <div className="circular-progress">
            <div className="progress-circle">
              <span className="percentage">64%</span>
            </div>
            <p>With 1 IVF Cycle</p>
          </div>
        </div>
        <div className="result-image">
          <img
            src="/path/to/image.png" // Replace with the actual path
            alt="Couple Image"
          />
        </div>
      </div>
    </>
  );
};

export default Result;
