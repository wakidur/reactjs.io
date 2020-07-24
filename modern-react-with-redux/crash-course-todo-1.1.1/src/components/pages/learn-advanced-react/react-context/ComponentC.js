import React from 'react';
import ThemeContext from './ThemeContext';
 
const C = () => (
  <ThemeContext.Consumer>
    {color => (
      <p style={{ color }}>
        Hello World
      </p>
    )}
  </ThemeContext.Consumer>
);