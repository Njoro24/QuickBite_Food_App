import React from 'react';
import '../hooks/App.css';

export default function Loader({ size = 'medium', color = '#FF6B6B', text = 'Loading...' }) {
    const loaderSizes = {
        //  3 props for loader functional components with default values
      small: { width: '30px', height: '30px' },
      medium: { width: '50px', height: '50px' },
      large: { width: '70px', height: '70px' }
    };

    const loaderStyle = {
        // spread operator for inserting size
        ...loaderSizes[size],
        // for the loader spinner
        // only the top takes the color
        borderColor: `${color} transparent transparent transparent`
      };
    
      return (
        <div className="loader-container">
          <div className="loader">
            <div className="loader-spinner" style={loaderStyle}></div>
          </div>
          {text && <p className="loader-text">{text}</p>}
        </div>
      );
}