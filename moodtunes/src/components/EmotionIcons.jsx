import { FaSmile, FaSadTear, FaAngry, FaMeh } from 'react-icons/fa';

const emotions = [
    { id: 'angry', icon: FaAngry, color: '#FFA7B2', label: 'Angry' },
    { id: 'neutral', icon: FaMeh, color: '#FEDC89', label: 'Neutral' },
    { id: 'happy', icon: FaSmile, color: '#89E5C2', label: 'Happy' },
    { id: 'sad', icon: FaSadTear, color: '#77C9EF', label: 'Sad' }
];

const EmotionIcons = ({ onSelect }) => {
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // 2 columns
        gap: '1rem',
        width: 'fit-content',
        margin: 'auto',
      }}>
      {emotions.map(({ id, icon: Icon, color, label }) => (
        <Icon
          key={id}
          onClick={() => onSelect(id)}
          color={color}
          size={'8rem'}
          style={{ cursor: 'pointer' }}
          title={label}
          aria-label={label}
        />
      ))}
    </div>
  );
};

export default EmotionIcons;
