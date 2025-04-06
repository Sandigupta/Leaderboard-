import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TopThree from '../components/TopThree';
import RankingList from '../components/RankingList';
import Pagination from '../components/Pagination';
import './LeaderboardPage.css';
import { generateRankingData } from '../utils/dataGenerator';

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('wealth');
  const [currentPage, setCurrentPage] = useState(1);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const itemsPerPage = 10;
  const totalPages = 5; // Simulating 5 pages of data

  useEffect(() => {
    // Reset to page 1 when changing tabs
    setCurrentPage(1);
    
    // Generate mock data for the current tab
    const newData = generateRankingData(100, activeTab);
    setLeaderboardData(newData);
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get top 3 for the hero section
  const topThree = leaderboardData.slice(0, 3);
  while (topThree.length < 3) {
    topThree.push({
      id: `placeholder-${topThree.length + 1}`,
      rank: topThree.length + 1,
      name: `Player ${topThree.length + 1}`,
      score: 0
    });
  }
  
  // Get items for current page (starting from rank 4)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = leaderboardData.slice(3 + startIndex, 3 + startIndex + itemsPerPage);

  return (
    <div className="leaderboard-page">
      <Header activeTab={activeTab} handleTabChange={handleTabChange} />
      
      <div className={`leaderboard-content ${activeTab}-theme`}>
        <TopThree data={topThree} theme={activeTab} />
        
        <div className="rankings-container">
          <RankingList data={currentItems} theme={activeTab} />
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
