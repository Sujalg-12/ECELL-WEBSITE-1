import { useState, useEffect, useRef } from 'react';

const Stats = ({
  stats = [
    { target: 50, label: "Events Organized", suffix: "+" },
    { target: 2500, label: "Participants", suffix: "+" },
    { target: 15, label: "Industry Partnerships", suffix: "+" },
    { target: 100, label: "Success Stories", suffix: "%" }
  ]
}) => {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / 60;

      const timer = setInterval(() => {
        current += increment;

        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }

        setAnimatedValues(prev => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, 33);
    });
  };

  return (
    <>
      <style>{`
        .stats-container {
          width: 100%;
          min-height: 262px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(20px, 4vh, 40px) clamp(15px, 4vw, 20px);
          position: relative;
          overflow: hidden;
        }

        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
          border-radius: 50%;
          opacity: 0.6;
          animation: float 6s infinite linear;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) rotate(360deg);
            opacity: 0;
          }
        }

        .stats-grid {
          width: 100%;
          max-width: 1200px;
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(15px, 3vw, 25px);
        }

        .stat-card {
          text-align: center;
          padding: clamp(20px, 4vw, 40px) clamp(15px, 3vw, 30px);
          border-radius: clamp(12px, 2vw, 16px);
          background: rgba(17, 24, 39, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(55, 65, 81, 0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          transform: translateY(-8px);
        }

        .stat-number {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: bold;
          margin-bottom: clamp(8px, 2vw, 12px);
          color: #00B7FF;
          line-height: 1;
        }

        .stat-label {
          color: #d1d5db;
          font-size: clamp(0.8rem, 2vw, 1rem);
          font-weight: 500;
          letter-spacing: 0.5px;
          line-height: 1.4;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: clamp(20px, 3vw, 30px);
          }

          .stat-number {
            font-size: clamp(2.5rem, 4vw, 4rem);
          }

          .stat-label {
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .stat-card {
            padding: clamp(30px, 3vw, 50px) clamp(20px, 2vw, 40px);
          }

          .stat-number {
            font-size: clamp(3rem, 3.5vw, 4.5rem);
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .stats-container {
            padding: clamp(15px, 3vh, 25px) clamp(10px, 3vw, 15px);
          }

          .stats-grid {
            gap: clamp(10px, 2vw, 15px);
          }

          .stat-card {
            padding: clamp(15px, 3vw, 25px) clamp(10px, 2vw, 20px);
          }

          .stat-number {
            font-size: clamp(1.5rem, 5vw, 2.5rem);
          }

          .stat-label {
            font-size: clamp(0.7rem, 1.8vw, 0.9rem);
          }
        }
      `}</style>

      <div className="stats-container">
        <div className="particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div ref={sectionRef} className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">
                {animatedValues[index]}{stat.suffix}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;