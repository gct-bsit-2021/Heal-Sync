import React, { useState } from 'react';
import ResourceCard from '../Resource/ResourceCard';

const Resources = [
  {
    title: 'Managing High Blood Pressure',
    description: 'Tips for daily BP control.',
    type: 'Article',
    link: 'https://example.com/blood-pressure-guide'
  },
  {
    title: 'Daily Diabetes Diet Plan',
    description: 'Healthy meal plan suggestions.',
    type: 'Tips',
    link: 'https://example.com/diabetes-diet'
  },
  {
    title: 'How to Use an Inhaler',
    description: 'Watch a video demonstration.',
    type: 'Video',
    link: 'https://youtube.com/example-video'
  },
];

const ResourceCenter = () => {
  const [filter, setFilter] = useState('All');

  const filteredResources = filter === 'All'
    ? Resources
    : Resources.filter(item => item.type === filter);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Resource Center</h2>

      {/* Filter Buttons */}
      <div style={{ marginBottom: '20px' }}>
        {['All', 'Article', 'Video', 'Tips'].map(f => (
          <button
            key={f}
            style={{
              marginRight: '10px',
              backgroundColor: filter === f ? '#007BFF' : '#eee',
              color: filter === f ? 'white' : 'black',
              padding: '8px 12px',
              borderRadius: '5px',
              border: 'none'
            }}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Resources List */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredResources.map((res, index) => (
          <ResourceCard key={index} {...res} />
        ))}
      </div>
    </div>
  );
};

export default ResourceCenter;
