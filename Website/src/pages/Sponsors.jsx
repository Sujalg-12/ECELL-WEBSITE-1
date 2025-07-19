import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    'Zerodha',
    'Unstop', 
    'Altair',
    '2IIM',
    'TiE Chennai',
    'Finlatics',
    'HDFC Bank',
    'StartupTN',
    'MaDeIT'
  ];

  return (
    <div className="sponsors-section">
      <style jsx>{`
    @import url(https://fonts.googleapis.com/css?family=Luckiest+Guy:regular);
    @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
    @import url(https://fonts.googleapis.com/css?family=Orbitron:regular,500,600,700,800,900);
    
        .sponsors-section {
          background-color: #000;
          padding: 30px 0;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid #222;
        }

        .sponsors-section::before,
        .sponsors-section::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 10;
          pointer-events: none;
        }

        .sponsors-section::before {
          left: 0;
          background: linear-gradient(to right, #000 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%);
        }

        .sponsors-section::after {
          right: 0;
          background: linear-gradient(to left, #000 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%);
        }

        .sponsors-title {
          text-align: center;
          color: #3b82f6;
          font-size: 22px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 30px;
          z-index: 10;
        }

        .sponsors-container {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .sponsor-item {
          display: inline-flex;
          align-items: center;
          color: #fff;
          font-size: 20px;
          font-family: 'Orbitron', sans-serif;
          font-weight: 600;
          margin: 0 60px;
          opacity: 0.7;
          transition: all 0.3s ease;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .sponsor-item:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .sponsor-item:hover ~ .sponsor-item,
        .sponsor-item:has(~ .sponsor-item:hover) {
          animation-play-state: paused;
        }

        .sponsor-item:nth-child(1) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(2) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(3) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(4) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(5) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(6) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(7) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(8) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(9) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(10) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }

        .sponsor-item:nth-child(11) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(12) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(13) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(14) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(15) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(16) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(17) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(18) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(19) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }
        .sponsor-item:nth-child(20) { 
          font-family: 'Orbitron', sans-serif; 
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .sponsors-container:hover {
          animation-play-state: paused;
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .sponsors-title {
            font-size: 16px;
            margin-bottom: 25px;
          }
          
          .sponsor-item {
            font-size: 18px;
            margin: 0 50px;
          }
          
          .sponsor-item:nth-child(2n) { 
            font-size: 18px;
          }
          .sponsor-item:nth-child(3n) { 
            font-size: 18px;
          }
          
          .sponsors-section::before,
          .sponsors-section::after {
            width: 120px;
          }
        }

        @media (max-width: 768px) {
          .sponsors-title {
            font-size: 14px;
            margin-bottom: 20px;
            letter-spacing: 1px;
          }
          
          .sponsor-item {
            font-size: 16px;
            margin: 0 40px;
          }
          
          .sponsor-item:nth-child(2n) { 
            font-size: 16px;
          }
          .sponsor-item:nth-child(3n) { 
            font-size: 16px;
          }
          
          .sponsors-section::before,
          .sponsors-section::after {
            width: 100px;
          }
        }

        @media (max-width: 480px) {
          .sponsors-section {
            padding: 20px 0;
          }
          
          .sponsors-title {
            font-size: 12px;
            margin-bottom: 15px;
          }
          
          .sponsor-item {
            font-size: 14px;
            margin: 0 30px;
          }
          
          .sponsor-item:nth-child(2n) { 
            font-size: 14px;
          }
          .sponsor-item:nth-child(3n) { 
            font-size: 14px;
          }
          
          .sponsors-section::before,
          .sponsors-section::after {
            width: 80px;
          }
        }
      `}</style>
      
      <div className="sponsors-title">Sponsors</div>
      <div className="sponsors-container">
        {/* First set of sponsors */}
        {sponsors.map((sponsor, index) => (
          <div key={`first-${index}`} className="sponsor-item">
            {sponsor}
          </div>
        ))}
        
        {/* Duplicate set for infinite loop */}
        {sponsors.map((sponsor, index) => (
          <div key={`second-${index}`} className="sponsor-item">
            {sponsor}
          </div>
        ))}
        
        {/* Third set to ensure seamless loop */}
        {sponsors.map((sponsor, index) => (
          <div key={`third-${index}`} className="sponsor-item">
            {sponsor}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;