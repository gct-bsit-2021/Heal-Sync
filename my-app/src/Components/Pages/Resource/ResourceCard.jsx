import React from 'react';

const ResourceCard = ({ title, description, type, link }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '15px',
      margin: '10px',
      width: '280px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Type:</strong> {type}</p>
      <a href={link} target="_blank" rel="noreferrer">Read More</a>
    </div>
  );
};

export default ResourceCard;
