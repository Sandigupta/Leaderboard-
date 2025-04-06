
import React from 'react';
import './Header.css';

const Header = ({ activeTab, handleTabChange }) => {
  const tabs = [
    { id: 'wealth', label: 'Wealth Ranking' },
    { id: 'live', label: 'Live Ranking' },
    { id: 'hourly', label: 'Hourly Ranking' },
    { id: 'family', label: 'Family Ranking' },
    { id: 'party', label: 'Party Ranking' },
  ];

  return (
    <div className="header">
      <div className="header-nav">
        
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
      </div>
      
      {/* {activeTab === 'wealth' && (
        <div className="toggle-container">
          <button className={`toggle-btn active`}>Daily</button>
          <button className={`toggle-btn`}>Monthly</button>
        </div>
      )}
      
      {activeTab === 'hourly' && (
        <div className="toggle-container">
          <button className={`toggle-btn active`}>Hourly Live List</button>
          <button className={`toggle-btn`}>Hourly Party List</button>
        </div>
      )}
      
      {activeTab === 'party' && (
        <div className="toggle-container">
          <button className={`toggle-btn active`}>Weekly Contribution Ranking</button>
          <button className={`toggle-btn`}>Weekly Charm Ranking</button>
        </div>
      )} */}
    </div>
  );
};

export default Header;
