
import React from 'react';
import './TopThree.css';

const TopThree = ({ data, theme }) => {
  // Make sure data is an array before proceeding
  const safeData = Array.isArray(data) ? data : [];
  
  // Arrange entries so rank 1 is in the middle, 2 on left, 3 on right
  const arrangedData = [
    safeData.find(item => item && item.rank === 2) || { id: 'placeholder-2', rank: 2, name: 'Player 2', score: 0 },
    safeData.find(item => item && item.rank === 1) || { id: 'placeholder-1', rank: 1, name: 'Player 1', score: 0 },
    safeData.find(item => item && item.rank === 3) || { id: 'placeholder-3', rank: 3, name: 'Player 3', score: 0 }
  ];

  return (
    <div className={`top-three ${theme}-theme`}>
      <div className="settlement-timer">
      </div>
      
      {theme === 'wealth' && (
        <div className="top-decoration">
          <div className="gold-shield">
            <div className="shield-star">★</div>
          </div>
        </div>
      )}
      
      {theme === 'hourly' && (
        <div className="top-decoration">
          <div className="hourly-badge">
            <div className="badge-clock">🕓</div>
          </div>
        </div>
      )}
      
      {theme === 'party' && (
        <div className="top-decoration">
          <div className="trophy-container">
            <div className="trophy">🏆</div>
          </div>
        </div>
      )}
      
      <div className="top-three-container">
        {arrangedData.map((item, index) => {
          const position = index === 0 ? 'left' : index === 1 ? 'center' : 'right';
          const rankClass = item.rank === 1 ? 'first' : item.rank === 2 ? 'second' : 'third';
          
          return (
            <div key={item.id} className={`top-item ${position} rank-${rankClass}`}>
              <div className="profile-container">
                {item.rank === 1 && <div className="crown">👑</div>}
                <div className="rank-circle">{item.rank}</div>
                <div className="profile-image">
                  <div className="avatar-placeholder">
                    {item.name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="user-name">{item.name}</div>
              {theme === 'wealth' && (
                <div className={`score-badge rank-${rankClass}`}>
                  <span className="coin">🪙</span>
                  <span>{item.score}</span>
                </div>
              )}
              {theme === 'party' && (
                <div className="score-value">
                  <span className="trophy-icon">🏆</span>
                  <span>{typeof item.score === 'number' ? item.score.toLocaleString() : item.score}</span>
                </div>
              )}
              {theme === 'hourly' && (
                <div className="fire-score">
                  <span className="fire-icon">🔥</span>
                  <span>{item.score}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopThree;
