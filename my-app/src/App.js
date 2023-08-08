import React from 'react';
import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar'; // Import the Sidebar component
import Body from './Body/Body'

function App() {

  const [isOpen, setIsOpen] = useState(false);


  const handleSidebarClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMainClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <div>
      <div
        className={`side-style ${isOpen ? '' : 'closed'} play`}
        onClick={handleSidebarClick}
      >
        <Sidebar isOpen={isOpen} />
      </div>
      <div
        className={`main-style ${isOpen ? '' : 'closed'}`}
        onClick={handleMainClick}
      >
        <Body  isOpen={isOpen}/>
      </div>
    </div>
    
  );
}

export default App;
