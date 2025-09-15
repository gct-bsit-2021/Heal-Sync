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
      <h3 style={{fontWeight:"bold",paddingBottom:"10px",backgroundColor:"#EAEBD0"}}> Mood Status</h3>
      <div style={{border:"2px solid #EAEBD0",backgroundColor:"#AF3E3E",marginTop:"20px",marginBottom:"20px",color:"#EAEBD0",borderRadius:"6px",padding:"20px"}}>
      <p style={{fontSize:"20px" ,paddingLeft:"2px"}}>Most Frequent Mood:   &nbsp; &nbsp;&nbsp;{mostCommonMood}</p>
      <p   style={{fontSize:"20px",paddingLeft:"2px"}}>Recent Mood:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {recentMood}</p>
      </div>
    </div>
    </>
  )
}

export default Moodprocess;
