import React from 'react';

const StarCard = ({
  text,
  backgroundColor = '#fcd34d',
  textColor = '#000',
  width = '300px',
  height = '300px'
}) => {
  return (
    <div style={{
      width,
      height,
      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      padding: '1.2rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    }}>
      <div style={{
        color: textColor,
        textAlign: 'center',
        fontSize: '0.9rem',
        lineHeight: '1.4',
        wordWrap: 'break-word',
        maxWidth: '90%',
      }}>
        {text}
      </div>
    </div>
  );
};

export default StarCard;
