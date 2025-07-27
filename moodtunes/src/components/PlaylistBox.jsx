import { FaPlay } from 'react-icons/fa';

const PlaylistBox = ({ onSelect }) => {
  const VinylSVG = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="48" stroke="#2b2a2aff" strokeWidth="4" fill="#2b2a2aff" />
      <circle cx="50" cy="50" r="25" fill="#ffc8e9ff" />
      <circle cx="50" cy="50" r="3" fill="white" />
    </svg>
  );

const PlayButtonSVG = ({ onClick }) => (
  <svg
    width="65"
    height="35"
    viewBox="0 0 100 100"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    {/* Circular border */}
    <circle cx="47" cy="50" r="48" stroke="#FFA7B2" strokeWidth="3" fill="none" />

    {/* Colored triangle sides */}
    <g transform="translate(50, 50)">
      {/* Define the 3 points of the triangle */}
      <line x1="-20" y1="-30" x2="26" y2="0" stroke="#89E5C2" strokeWidth="4" />
      <line x1="26" y1="0" x2="-20" y2="30" stroke="#77C9EF" strokeWidth="4" />
      <line x1="-20" y1="30" x2="-20" y2="-30" stroke="#FEDC89" strokeWidth="4" />
    </g>
  </svg>
);



  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        width: '300px', // adjust as needed
        gap: '1rem',
      }}
    >
      {/* Vinyl on the left */}
      <VinylSVG />

      {/* Playlist name in the middle */} 
      {/* // TODO: Get 2 latest playlist names */}
      <p style={{ flex: 1, textAlign: 'center', margin: 0 }}>Playlist Name</p>

      {/* Play button on the right */}
      <PlayButtonSVG onClick={onSelect} style={{ cursor: 'pointer'}}/>
    </div>
  );
};

export default PlaylistBox;
