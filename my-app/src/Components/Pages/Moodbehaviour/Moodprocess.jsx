import React from 'react'

const Moodprocess = ({ entries }) => {
     if (entries.length === 0) return null;
      const count = {};
  entries.forEach(e => {
    count[e.mood] = (count[e.mood] || 0) + 1;
  });
  const mostCommonMood = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
  const recentMood = entries[0].mood;
  return (
    <>
       <div style={{ marginBottom: '10px' }}>
      <h3> Mood Stats</h3>
      <p>Most Frequent Mood: {mostCommonMood}</p>
      <p>Recent Mood: {recentMood}</p>
    </div>
    </>
  )
}

export default Moodprocess;
