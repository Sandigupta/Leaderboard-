
export const generateRankingData = (count, theme) => {
  const data = [];
  
  for (let i = 1; i <= count; i++) {
    let score;
    let icon = null;
    
    if (theme === 'wealth') {
      score = `${Math.floor(Math.random() * 9)}****${Math.floor(Math.random() * 9)}`;
      if (Math.random() > 0.7) {
        icon = '🔶';
      }
    } else if (theme === 'party') {
      score = Math.floor(Math.random() * 10000000) + 1000000;
      if (Math.random() > 0.7) {
        icon = '👑';
      }
    } else if (theme === 'hourly') {
      score = Math.floor(Math.random() * 2000) + 100;
      if (Math.random() > 0.7) {
        icon = '🔥';
      }
    } else {
      score = Math.floor(Math.random() * 1000000) + 100000;
    }
    
    // Generate random user name
    const firstName = ['Alex', 'Jamie', 'Casey', 'Jordan', 'Taylor', 'Morgan', 'Riley', 'Quinn', 'Avery', 'Dakota', 'Skyler', 'Reese', 'Emerson', 'Finley', 'Hayden'][Math.floor(Math.random() * 15)];
    const lastName = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Moore'][Math.floor(Math.random() * 15)];
    
    data.push({
      id: i,
      rank: i,
      name: `${firstName} ${lastName}`,
      score: score,
      icon: icon,
      userId: theme === 'hourly' ? `id${Math.floor(Math.random() * 1000000)}` : null
    });
  }
  
  return data;
};
