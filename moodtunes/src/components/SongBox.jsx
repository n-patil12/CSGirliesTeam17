import React from 'react';

const SongBox = ({ videoIds, onVideoClick }) => {
   return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {videoIds.map((id, idx) => {
        const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

        return (
          <img
            key={idx}
            src={thumbnailUrl}
            alt="YouTube video thumbnail"
            style={{ width: '180px', height: '100px', cursor: 'pointer', objectFit: 'cover' }}
            onClick={() => onVideoClick(id)}
          />
        );
      })}
    </div>
  );
};

export default SongBox;
