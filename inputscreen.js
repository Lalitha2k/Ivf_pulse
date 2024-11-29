import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InputScreen.css';
import Header from '../components/header';

const InputScreen = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState(1); // Default stage for slider
  const [fertility, setFertility] = useState('');
  const [medicalConditions, setMedicalConditions] = useState([]);
  const [icsi, setIcsi] = useState('');
  const [pgt, setPgt] = useState('');
  const [showPopup, setShowPopup] = useState(false); // For slider popup

  const handleCheckboxChange = (condition) => {
    setMedicalConditions((prevConditions) =>
      prevConditions.includes(condition)
        ? prevConditions.filter((item) => item !== condition)
        : [...prevConditions, condition]
    );
  };

  const handleSliderChange = (value) => {
    setAge(value);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500); // Hide popup after 1.5 seconds
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/result', { state: { fertility, age, medicalConditions, icsi, pgt } });
  };

  return (
    <div className="input-screen">
      <Header />
      <h3 className="breadcrumb">
        Home / <span className="highlight">IVF Success Rate Calculator</span>
      </h3>
      <form onSubmit={handleSubmit}>
        {/* Age Question */}
        <div className="form-group">
          <label className="form-group-headers">Which age range applies to you?</label>
          <div className="radio-buttons">
            {[
              'Under 30',
              'Between 30 - 34',
              'Between 35 - 37',
              'Between 38 - 40',
              'Between 41 - 43',
              'Above 43',
            ].map((range) => (
              <label key={range} className="radio-container">
                <input
                  type="radio"
                  value={range}
                  checked={fertility === range}
                  onChange={(e) => setFertility(e.target.value)}
                />
                <span className="custom-radio"></span>
                {range}
              </label>
            ))}
          </div>
        </div>

        {/* IVF Cycles Slider */}
        <div className="form-group">
          <label className="form-group-headers">Number of IVF Cycles?</label>
          <div className="slider-container">
            {showPopup && (
              <div className="slider-popup" style={{ left: `${(age - 1) * 33.3}%` }}>
                {age}
              </div>
            )}
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={age}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              className="slider"
              style={{
                background: `linear-gradient(to right, #E63946 ${(age - 1) * 33.3}%, lightgrey ${(age - 1) * 33.3}%)`,
              }}
            />
            <div className="slider-labels">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>
        </div>

        {/* New Question: ICSI and PGT */}
        <div className="form-group">
          <label  className="form-group-headers">Have you undergone these procedures before?</label>
          <div className="radio-buttons">
            <div className="procedure">
              <span className="bold-text">ICSI Procedure:</span>
              <label className="radio-container">
                <input
                  type="radio"
                  value="Yes"
                  checked={icsi === 'Yes'}
                  onChange={() => setIcsi('Yes')}
                />
                <span className="custom-radio"></span>
                Yes
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  value="No"
                  checked={icsi === 'No'}
                  onChange={() => setIcsi('No')}
                />
                <span className="custom-radio"></span>
                No
              </label>
            </div>

            <div className="procedure">
              <span className="bold-text">PGT Testing:</span>
              <label className="radio-container">
                <input
                  type="radio"
                  value="Yes"
                  checked={pgt === 'Yes'}
                  onChange={() => setPgt('Yes')}
                />
                <span className="custom-radio"></span>
                Yes
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  value="No"
                  checked={pgt === 'No'}
                  onChange={() => setPgt('No')}
                />
                <span className="custom-radio"></span>
                No
              </label>
            </div>
          </div>
        </div>

        {/* Medical Conditions */}
        <div className="form-group">
          <label className="form-group-headers">Do you have any of these medical conditions?</label>
          <div className="checkbox-group">
            {['PCOS', 'Endometriosis', 'Low Ovarian Reserve', 'Male Factor Infertility'].map((condition) => (
              <label key={condition} className="checkbox-container">
                <input
                  type="checkbox"
                  value={condition}
                  onChange={() => handleCheckboxChange(condition)}
                  checked={medicalConditions.includes(condition)}
                />
                <span className="custom-checkbox"></span>
                {condition}
              </label>
            ))}
          </div>
        </div>

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default InputScreen;
