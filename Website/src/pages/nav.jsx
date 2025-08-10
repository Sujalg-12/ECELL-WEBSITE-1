import React, { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ecellLogo from '../assets/images/ecell-logo.png'; // adjust path if needed

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Optimized mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Updated navigation handler to handle routes
  const handleNavClick = useCallback((pathOrId) => {
    setIsMobileMenuOpen(false);

    if (pathOrId === '/events') {
      navigate('/events');
    } else if (pathOrId === '/teams') {
      navigate('/teams');
    } else if (pathOrId === '/') {
      navigate('/');
      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pathOrId === '#about') {
      // Check if we're already on the homepage
      if (location.pathname === '/') {
        // If on homepage, just scroll to the about section
        const target = document.querySelector('#about');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // If not on homepage, navigate to homepage and then scroll to about
        navigate('/');
        // Use setTimeout to ensure the page loads before scrolling
        setTimeout(() => {
          const target = document.querySelector('#about');
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    } else if (pathOrId === '#gallery') {
      // Similar logic for gallery section
      if (location.pathname === '/') {
        const target = document.querySelector('#gallery');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const target = document.querySelector('#gallery');
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    } else {
      // For other navigation items, scroll to sections
      const target = document.querySelector(pathOrId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <style>{`
        .header {
          width: 100%;
          background: rgba(0, 0, 0, 0.0);
          backdrop-filter: blur(5px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 999999;
          padding: 10px;
          position: relative;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          width: 100%;
          position: relative;
          z-index: 999999;
        }

        .ecell-logo {
          height: 72px;
          width: auto;
          object-fit: contain;
          padding-left: 20px;
          z-index: 999999;
          position: relative;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 10px;
          align-items: center;
          padding-right: 30px;
          z-index: 999999;
          position: relative;
        }

        .nav-links li {
          position: relative;
          z-index: 999999;
        }

        .nav-item {
          font-family: 'Poppins', sans-serif;
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.5px;
          padding: 15px 20px;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          text-transform: uppercase;
          border: 0px solid rgba(165, 163, 163, 0.77);
          border-radius: 50px;
          overflow: hidden;
          z-index: 999999;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: white;
          left: 0;
          bottom: -100%;
          border-radius: 50%;
          transition: all ease 0.4s;
          z-index: -1;
        }

        .nav-item:hover::after {
          bottom: 0;
          border-radius: 0;
        }

        .nav-item:hover {
          color: black;
        }

        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
          z-index: 9999999;
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Mobile Responsive Styles - Only show toggle when nav items don't fit */
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .header {
            padding: 8px;
            position: relative;
            z-index: 9999999;
            background: rgba(0, 0, 0, 0.1);
          }

          .navbar {
            height: 45px;
            z-index: 9999999;
          }

          .ecell-logo {
            height: 48px;
            width: auto;
            object-fit: contain;
            padding-left: 20px;
            z-index: 9999999;
          }

          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(15px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            z-index: 999998;
            padding: 0;
            margin: 0;
            
            /* Fade Down Animation */
            opacity: ${isMobileMenuOpen ? '1' : '0'};
            transform: ${isMobileMenuOpen ? 'translateY(0px) scale(1)' : 'translateY(-80px) scale(0.9)'};
            transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.35);
            
            /* Show/hide menu */
            display: flex;
            visibility: ${isMobileMenuOpen ? 'visible' : 'hidden'};
            pointer-events: ${isMobileMenuOpen ? 'auto' : 'none'};
          }

          .nav-item {
            font-size: 18px;
            padding: 20px 30px;
            text-align: center;
            width: auto;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 999998;
            margin: 10px 0;
            
            /* Individual item fade down animation */
            opacity: ${isMobileMenuOpen ? '1' : '0'};
            transform: ${isMobileMenuOpen ? 'translateY(0px) scale(1)' : 'translateY(-30px) scale(0.8)'};
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
          }

          /* Enhanced staggered animation for each menu item */
          .nav-item:nth-child(1) {
            transition-delay: ${isMobileMenuOpen ? '0.1s' : '0s'};
          }

          .nav-item:nth-child(2) {
            transition-delay: ${isMobileMenuOpen ? '0.2s' : '0s'};
          }

          .nav-item:nth-child(3) {
            transition-delay: ${isMobileMenuOpen ? '0.3s' : '0s'};
          }

          .nav-item:nth-child(4) {
            transition-delay: ${isMobileMenuOpen ? '0.4s' : '0s'};
          }

          .nav-item:nth-child(5) {
            transition-delay: ${isMobileMenuOpen ? '0.5s' : '0s'};
          }

          .nav-item::after {
            display: none;
          }

          .nav-item:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            transform: ${isMobileMenuOpen ? 'translateY(0px) scale(1.1)' : 'translateY(-30px) scale(0.8)'};
            border-radius: 25px;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 6px;
            z-index: 9999999;
          }

          .navbar {
            height: 40px;
            z-index: 9999999;
          }

          .ecell-logo {
            height: 36px;
            width: auto;
            object-fit: contain;
            padding-left: 15px;
            z-index: 9999999;
          }

          .nav-item {
            font-size: 16px;
            padding: 18px 25px;
            z-index: 999998;
          }

          .mobile-menu-toggle {
            font-size: 20px;
            padding: 6px;
            z-index: 9999999;
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 320px) {
          .nav-item {
            font-size: 14px;
            padding: 16px 20px;
            z-index: 999998;
          }

          .ecell-logo {
            height: 30px;
            width: auto;
            object-fit: contain;
            padding-left: 10px;
            z-index: 9999999;
          }

          .mobile-menu-toggle {
            width: 30px;
            height: 30px;
            font-size: 18px;
          }
        }

        /* Desktop responsive - Show nav items, hide toggle */
        @media (min-width: 901px) {
          .nav-links {
            display: flex !important;
          }

          .mobile-menu-toggle {
            display: none !important;
          }
        }

        @media (min-width: 901px) and (max-width: 1024px) {
          .navbar {
            height: 55px;
            z-index: 999999;
          }

          .nav-item {
            font-size: 14px;
            padding: 12px 18px;
            z-index: 999999;
          }
        }

        @media (min-width: 1025px) {
          .navbar {
            height: 60px;
            z-index: 999999;
          }

          .nav-item {
            font-size: 15px;
            padding: 12px 20px;
            z-index: 999999;
          }
        }
      `}</style>

      <header className="header">
        <nav className="navbar">
          <img 
            src={ecellLogo} 
            alt="E-Cell Logo" 
            className="ecell-logo" 
            onClick={() => handleNavClick('/')}
            style={{ cursor: 'pointer' }}
          />
          
          <ul className="nav-links">
            <li><a className="nav-item" onClick={() => handleNavClick('/')}>HOME</a></li>
            <li><a className="nav-item" onClick={() => handleNavClick('/events')}>EVENTS</a></li>
            <li><a className="nav-item" onClick={() => handleNavClick('/teams')}>TEAM</a></li>
            <li><a className="nav-item" onClick={() => handleNavClick('#gallery')}>GALLERY</a></li>
            <li><a className="nav-item" onClick={() => handleNavClick('#about')}>ABOUT US</a></li>
          </ul>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Nav;