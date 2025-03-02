import React from 'react';
import useTheme from '../../hooks/useTheme';

const Button = ({ onClick, children }) => {
  const { theme } = useTheme();

  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
