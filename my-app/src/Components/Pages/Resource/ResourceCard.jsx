import React from 'react'

const ResourceCard = ({ title, description, type, link }) => {
  return (
    <>
      <div className="animated-card" style={{
        border: '1px solid brown',
        borderRadius: '12px',
        padding: '15px',
        margin: '10px',
        width:"300px",
        height:"350px",
        marginTop:"20px",
        marginLeft:"10px",
        boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)",
        backgroundColor:"#EAEBD0",
        color:"brown"


      }}>
        <h5 style={{fontWeight:"bold",marginTop:"20px"}}>{title}</h5>
        <p >{description}</p>
        <p><strong>Type:</strong> {type}</p>
        <button
    onClick={() => window.open(link, '_blank')}
    style={{
      padding: '8px 16px',
      backgroundColor: 'brown',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    }}
  >
    Read More
  </button>
  <br/>
    <button
      onClick={() =>
        window.open(`https://www.google.com/search?q=${encodeURIComponent(title)}`, '_blank')
      }
      style={{
        marginTop:"10px",
        padding: '8px 16px',
      backgroundColor: 'brown',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      }}
    >
      Google
    </button>
    <br/>
    <button
      onClick={() =>
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(title)}`, '_blank')
      }
      style={{
        marginTop:"10px",
        padding: '8px 16px',
      backgroundColor: 'brown',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      }}
    >
      YouTube
    </button>

      </div>

    </>
  )
}

export default ResourceCard
