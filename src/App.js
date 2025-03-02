import React from 'react';
import './App.css';
import ThemeProvider from './context/ThemeProvider';
import Text from './components/Article';

function App() {
  return (
    <ThemeProvider>
      <div className="layout">
        <h1>Забавные факты о Спанч Бобе</h1>
        <Text />
      </div>
    </ThemeProvider>
  );
}

export default App;
