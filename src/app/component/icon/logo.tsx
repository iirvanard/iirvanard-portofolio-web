const PixelatedKoala = () => {
    return (
      <svg
        width="50" height="50" viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Kepala Koala */}
        <rect x="10" y="10" width="30" height="30" fill="#A0A0A0" />
        
        {/* Telinga */}
        <rect x="5" y="15" width="5" height="10" fill="#A0A0A0" />
        <rect x="40" y="15" width="5" height="10" fill="#A0A0A0" />
        
        {/* Kacamata */}
        <rect x="15" y="20" width="8" height="8" fill="#000" />
        <rect x="27" y="20" width="8" height="8" fill="#000" />
        <rect x="23" y="22" width="4" height="4" fill="#000" />
        
        {/* Hidung */}
        <rect x="23" y="28" width="4" height="4" fill="#333" />
      </svg>
    );
  };
  
  export default PixelatedKoala;