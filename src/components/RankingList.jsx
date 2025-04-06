
import React from 'react';
import './RankingList.css';

const RankingList = ({ data, theme }) => {
  return (
    <div className="ranking-list">
      {data.map((item) => (
        <div key={item.id} className="ranking-item">
          <div className="rank-number">{item.rank}</div>
          <div className="user-info">
            <div className="user-avatar">
              <div className="avatar-placeholder">
                {item.name.charAt(0)}
              </div>
            </div>
            <div className="user-details">
              <div className="user-name-container">
                <span className="user-name">{item.name}</span>
                {item.icon && <span className="user-icon">{item.icon}</span>}
              </div>
              {item.userId && <div className="user-id">ID: {item.userId}</div>}
            </div>
          </div>
          <div className="user-score">
            {theme === 'wealth' && (
              <>
                <span>{item.score}</span>
                <span className="score-icon">🪙</span>
              </>
            )}
            {theme === 'party' && (
              <>
                <span>{typeof item.score === 'number' ? item.score.toLocaleString() : item.score}</span>
                <span className="score-icon">🏆</span>
              </>
            )}
            {theme === 'hourly' && (
              <>
                <span>{item.score}</span>
                <span className="score-icon">🔥</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankingList;
