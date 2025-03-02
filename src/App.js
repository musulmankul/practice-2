import React from 'react';
import './App.css';
import ThemeProvider from './context/ThemeProvider';
import Button from './components/Button';
import Text from './components/Article';

function App() {
  return (
    <ThemeProvider>
      <div className="layout">
        <h1>Как стать радиантом за 2 месяца</h1>
        <Text />
      </div>
    </ThemeProvider>
  );
}

export default App;
