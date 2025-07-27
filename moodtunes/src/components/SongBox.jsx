import React from 'react';

const SongBox = ({ videoIds, onVideoClick }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)', // 5 items per row
        gap: '1rem',
        maxWidth: '1000px', // optional: to prevent overly large grid on wide screens
        margin: '0 auto' // optional: centers the grid
      }}
    >
      {videoIds.map((id, idx) => {
        const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

        return (
          <img
            key={idx}
            src={thumbnailUrl}
            alt="YouTube video thumbnail"
            style={{
              width: '180px',
              height: '100px',
              cursor: 'pointer',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
            onClick={() => onVideoClick(id)}
          />
        );
      })}
    </div>
  );
};

export default SongBox;
