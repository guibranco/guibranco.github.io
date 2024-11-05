import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <div className="two-cols">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
