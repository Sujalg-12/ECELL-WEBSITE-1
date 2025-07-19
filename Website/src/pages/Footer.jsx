import React from 'react';
import ecellLogo from '../assets/images/ecell-logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .footer {
          font-family: 'Inter', sans-serif;
          background: #000000;
          color: white;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          min-height: clamp(400px, 70vh, 600px);
        }

        .footer::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: clamp(80px, 15vh, 150px);
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
          pointer-events: none;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(30px, 5vw, 60px);
          padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 100px) clamp(20px, 4vw, 40px);
          align-items: start;
          position: relative;
          z-index: 2;
          flex: 1;
        }

        /* Left Section - Logo and Social */
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: clamp(25px, 4vw, 40px);
          position: relative;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: clamp(10px, 2vw, 15px);
          flex-wrap: wrap;
        }

        .logo-image {
          width: clamp(120px, 15vw, 200px);
          height: auto;
          max-width: 100%;
          object-fit: contain;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-text h1 {
          font-size: clamp(18px, 4vw, 32px);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 5px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .brand-text .subtitle {
          font-size: clamp(14px, 3vw, 24px);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .social-section {
          display: flex;
          flex-direction: column;
          gap: clamp(15px, 3vw, 20px);
          position: relative;
        }

        .follow-text {
          font-size: clamp(12px, 2.5vw, 18px);
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .social-links {
          display: flex;
          gap: clamp(10px, 2vw, 15px);
          flex-wrap: wrap;
        }

        .social-link {
          width: clamp(40px, 8vw, 50px);
          height: clamp(40px, 8vw, 50px);
          background: rgba(255, 255, 255, 0.1);
          border-radius: clamp(8px, 2vw, 12px);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          font-size: clamp(18px, 4vw, 24px);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          cursor: pointer;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .social-link.instagram:hover {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }

        .social-link.linkedin:hover {
          background: #0077b5;
        }

        .social-link.twitter:hover {
          background: #1da1f2;
        }

        .social-link.github:hover {
          background: #333;
        }

        .social-link svg {
          transition: all 0.3s ease;
          width: clamp(20px, 4vw, 28px);
          height: clamp(20px, 4vw, 28px);
        }

        .social-link:hover svg {
          transform: scale(1.1);
        }

        /* Middle Section - Quick Links */
        .footer-middle {
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 4vw, 30px);
          padding-top: clamp(10px, 2vw, 20px);
        }

        .quick-links-title {
          font-size: clamp(12px, 2.5vw, 18px);
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .quick-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 2vw, 15px);
          padding: 0;
          margin: 0;
        }

        .quick-links a {
          color: #e2e8f0;
          text-decoration: none;
          font-size: clamp(12px, 2.5vw, 16px);
          font-weight: 400;
          transition: all 0.3s ease;
          padding: clamp(3px, 1vw, 5px) 0;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          display: inline-block;
        }

        .quick-links a:hover {
          color: white;
          transform: translateX(8px);
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
        }

        /* Right Section - Contact Cards */
        .footer-right {
          display: flex;
          flex-direction: column;
          gap: clamp(15px, 3vw, 20px);
          padding-top: clamp(10px, 2vw, 20px);
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: clamp(12px, 3vw, 20px);
          padding: clamp(15px, 4vw, 25px) clamp(18px, 4vw, 30px);
          color: #2d3748;
          font-size: clamp(12px, 2.5vw, 16px);
          font-weight: 500;
          min-height: clamp(50px, 10vw, 80px);
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          word-break: break-word;
          line-height: 1.4;
        }

        .contact-card:hover {
          background: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .contact-card.address {
          min-height: clamp(60px, 12vw, 100px);
          align-items: flex-start;
          padding-top: clamp(18px, 4vw, 30px);
        }

        /* Footer Bottom */
        .footer-bottom {
          padding: clamp(15px, 3vw, 20px) clamp(20px, 5vw, 100px);
          text-align: center;
          position: relative;
          z-index: 2;
          margin-top: auto;
        }

        .footer-bottom p {
          color: #cbd5e1;
          font-size: clamp(10px, 2vw, 14px);
          font-weight: 400;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          margin: 0;
          line-height: 1.5;
        }

        .footer-bottom a {
          color: #e2e8f0;
          text-decoration: none;
        }

        .footer-bottom a:hover {
          color: white;
        }

        /* Background Effects */
        .bg-effects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          animation: bgFloat 12s ease-in-out infinite;
        }

        .bg-circle:nth-child(1) {
          width: clamp(60px, 10vw, 100px);
          height: clamp(60px, 10vw, 100px);
          top: 10%;
          left: 15%;
          animation-delay: 0s;
        }

        .bg-circle:nth-child(2) {
          width: clamp(40px, 8vw, 60px);
          height: clamp(40px, 8vw, 60px);
          top: 60%;
          right: 20%;
          animation-delay: 4s;
        }

        .bg-circle:nth-child(3) {
          width: clamp(50px, 9vw, 80px);
          height: clamp(50px, 9vw, 80px);
          bottom: 30%;
          left: 70%;
          animation-delay: 8s;
        }

        @keyframes bgFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.03; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.08; 
          }
        }

        /* Ultra Small Mobile (320px and below) */
        @media (max-width: 320px) {
          .footer {
            min-height: 350px;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 25px 15px 15px;
            text-align: center;
          }
          
          .logo-container {
            justify-content: center;
            flex-direction: column;
            gap: 10px;
          }
          
          .logo-image {
            width: 100px;
          }
          
          .social-links {
            justify-content: center;
            gap: 8px;
          }
          
          .social-link {
            width: 35px;
            height: 35px;
          }
          
          .contact-card {
            padding: 12px 15px;
            min-height: 45px;
            font-size: 11px;
          }
          
          .contact-card.address {
            min-height: 55px;
            padding-top: 15px;
          }
          
          .quick-links {
            align-items: center;
          }
          
          .footer-bottom {
            padding: 12px 15px;
          }
        }

        /* Small Mobile (321px - 480px) */
        @media (min-width: 321px) and (max-width: 480px) {
          .footer {
            min-height: 400px;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 30px 18px 18px;
            text-align: center;
          }
          
          .footer-left {
            align-items: center;
          }
          
          .logo-container {
            justify-content: center;
            flex-direction: column;
            gap: 12px;
          }
          
          .logo-image {
            width: 130px;
          }
          
          .social-links {
            justify-content: center;
            gap: 10px;
          }
          
          .footer-middle {
            align-items: center;
          }
          
          .quick-links {
            align-items: center;
          }
          
          .contact-card {
            text-align: center;
            justify-content: center;
          }
          
          .contact-card.address {
            align-items: center;
          }
        }

        /* Tablet Portrait (481px - 768px) */
        @media (min-width: 481px) and (max-width: 768px) {
          .footer {
            min-height: 450px;
          }
          
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 35px;
            padding: 35px 25px 20px;
          }
          
          .footer-right {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            padding-top: 20px;
          }
          
          .logo-image {
            width: 150px;
          }
          
          .contact-card {
            text-align: center;
            justify-content: center;
          }
          
          .contact-card.address {
            align-items: center;
          }
        }

        /* Tablet Landscape (769px - 992px) */
        @media (min-width: 769px) and (max-width: 992px) {
          .footer {
            min-height: 500px;
          }
          
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            padding: 40px 35px 25px;
          }
          
          .logo-image {
            width: 160px;
          }
        }

        /* Small Desktop (993px - 1199px) */
        @media (min-width: 993px) and (max-width: 1199px) {
          .footer {
            min-height: 520px;
          }
          
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
            gap: 45px;
            padding: 50px 50px 30px;
          }
          
          .logo-image {
            width: 170px;
          }
        }

        /* Desktop (1200px - 1519px) */
        @media (min-width: 1200px) and (max-width: 1519px) {
          .footer {
            min-height: 550px;
          }
          
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
            gap: 50px;
            padding: 60px 70px 35px;
          }
          
          .logo-image {
            width: 180px;
          }
        }

        /* Large Desktop (1520px+) */
        @media (min-width: 1520px) {
          .footer {
            max-width: 1520px;
            margin: 0 auto;
            min-height: 600px;
          }
          
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
            gap: 60px;
            padding: 80px 100px 40px;
          }
          
          .logo-image {
            width: 200px;
          }
        }

        /* Landscape orientation fixes */
        @media (max-width: 768px) and (orientation: landscape) and (max-height: 500px) {
          .footer {
            min-height: auto;
          }
          
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            padding: 25px 30px 15px;
          }
          
          .footer-left {
            gap: 15px;
          }
          
          .logo-container {
            flex-direction: row;
            gap: 10px;
          }
          
          .logo-image {
            width: 80px;
          }
          
          .social-links {
            gap: 8px;
          }
          
          .social-link {
            width: 35px;
            height: 35px;
          }
          
          .contact-card {
            padding: 10px 12px;
            min-height: 40px;
          }
          
          .contact-card.address {
            min-height: 50px;
            padding-top: 12px;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .logo-image {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .social-link,
          .quick-links a,
          .contact-card,
          .bg-circle {
            animation: none;
            transition: none;
          }
          
          .social-link:hover,
          .contact-card:hover {
            transform: none;
          }
          
          .quick-links a:hover {
            transform: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .footer {
            background: #000;
          }
          
          .contact-card {
            background: #fff;
            border: 2px solid #000;
          }
          
          .social-link {
            border: 2px solid #fff;
          }
        }

        /* Print styles */
        @media print {
          .footer {
            background: white;
            color: black;
            box-shadow: none;
          }
          
          .bg-effects {
            display: none;
          }
          
          .social-link {
            border: 1px solid black;
          }
        }
      `}</style>

      <div className="bg-effects">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
      </div>
      
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo-container">
            <img 
              src={ecellLogo} 
              alt="E-Cell IIITDM-K Logo" 
              className="logo-image"
            />
            <div className="brand-text">
              {/* Add brand text here if needed */}
            </div>
          </div>
          
          <div className="social-section">
            <div className="follow-text">FOLLOW US ON</div>
            <div className="social-links">
              <a href="#" className="social-link instagram" aria-label="Instagram">
                <svg viewBox="0 0 32 32" fill="none">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect width="32" height="32" rx="8" fill="url(#instagram-gradient)" />
                  <circle cx="16" cy="16" r="5" fill="none" stroke="white" strokeWidth="2" />
                  <circle cx="23" cy="9" r="1.5" fill="white" />
                  <rect x="6" y="6" width="20" height="20" rx="6" fill="none" stroke="white" strokeWidth="2" />
                </svg>
              </a>
              <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#0077b5" />
                  <path d="M8.5 12h3v10h-3V12zm1.5-4.5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8z" fill="white" />
                  <path d="M14 12h2.8v1.4h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V22h-3v-4.8c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4V22h-3V12z" fill="white" />
                </svg>
              </a>
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#1da1f2" />
                  <path d="M24 9.5c-.8.3-1.6.6-2.5.7.9-.5 1.6-1.4 1.9-2.4-.8.5-1.7.8-2.7 1-.8-.8-1.9-1.3-3.1-1.3-2.3 0-4.2 1.9-4.2 4.2 0 .3 0 .6.1.9-3.5-.2-6.6-1.9-8.7-4.4-.4.6-.6 1.4-.6 2.2 0 1.5.7 2.8 1.8 3.5-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.9 6.3 1.9 7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1z" fill="white" />
                </svg>
              </a>
              <a href="#" className="social-link github" aria-label="GitHub">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#333" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 8C11.6 8 8 11.6 8 16c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.5.4C21.7 22.5 24 19.5 24 16c0-4.4-3.6-8-8-8z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="quick-links-title">QUICK LINKS</div>
          <ul className="quick-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="contact-card address">
            Address: IIITDM Kancheepuram, Chennai
          </div>
          <div className="contact-card">
            Email: ecell@iiitdm.ac.in
          </div>
          <div className="contact-card">
            Phone: +91 12345 67890
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with Love by Tech team E-cell IIITDM-K</p>
      </div>
    </footer>
  );
};

export default Footer;

