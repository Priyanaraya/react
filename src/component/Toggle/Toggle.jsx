import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div className={`toggle-container ${isOn ? 'on' : 'off'}`}>

      <button onClick={handleToggle} >
        {isOn ? 'On' : 'Off'}
      </button>
      <p>Welcome</p>
    </div>
  );
};

export default Toggle;