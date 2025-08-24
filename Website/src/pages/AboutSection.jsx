import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const totalSlides = 3;

    const updateSlides = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      const scrollTop = window.pageYOffset;
      const containerTop = scrollContainer.offsetTop;
      const containerHeight = scrollContainer.offsetHeight;

      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrollTop - containerTop) / (containerHeight - window.innerHeight))
      );

      const slides = document.querySelectorAll('.slide');

      const slideThresholds = [
        { enter: 0.1, exit: 0.35 },    // Slide 1: 10% - 35% (appears on first scroll)
        { enter: 0.65, exit: 0.7 },    // Slide 2: 45% - 70% (appears on second scroll)  
        { enter: 0.95, exit: 1.1 },    // Slide 3: 80% - 95% (appears on third scroll)
      ];

      for (let i = 0; i < totalSlides; i++) {
        const slide = slides[i];
        const threshold = slideThresholds[i];

        slide.classList.remove('active');

        if (scrollProgress >= threshold.enter) {
          slide.classList.add('active');
          slide.style.opacity = '1';
          slide.style.transform = `translateY(calc(5vh + ${i * 5}vh))`;
        } else if (scrollProgress > threshold.exit) {
          const exitProgress = (scrollProgress - threshold.exit) / (threshold.enter - threshold.exit);
          const opacity = exitProgress;
          const translateY = 100 - exitProgress * 95;
          slide.style.opacity = opacity.toString();
          slide.style.transform = `translateY(${translateY - i * 5}vh)`;
        } else {
          slide.style.opacity = '0';
          slide.style.transform = 'translateY(100vh)';
        }
      }

      if (scrollProgress >= 0.85) {
        for (let i = 0; i < totalSlides; i++) {
          slides[i].classList.add('active');
          slides[i].style.opacity = '1';
          slides[i].style.transform = `translateY(calc(5vh + ${i * 5}vh))`;
        }
      }
    };

    const onScroll = () => {
      requestAnimationFrame(updateSlides);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateSlides);
    updateSlides();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateSlides);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          color: #fff;
          font-family: 'Arial', sans-serif;
          overflow-x: hidden;
        }

        @keyframes floatRocket {
          0% {
            transform: translateY(0) rota
            te(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-2deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }

        .scroll-container {
          height: 300vh;
          position: relative;
          background: #000;
        }

        .slide-container {
          position: sticky;
          top: 0;
          height: 100vh;
            
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000;
        }

        .slide {
          position: absolute;
          width: clamp(280px, 80%, 1200px);
          max-width: 1200px;
          height: clamp(400px, 70vh, 80vh);
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          border-radius: clamp(15px, 2vw, 20px);
          padding: clamp(20px, 5vw, 60px) clamp(15px, 4vw, 40px);
          text-align: center;
          border: 1px solid #333;
          box-shadow: 0 20px 60px rgba(0, 0
            , 0, 0.5);
          transform: translateY(100vh);
              {/* <svg viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="m16 10-4 4-4-4"></path>
              </svg> */}
            
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
        }

        .slide.active {
          opacity: 1;
        }

        .slide.slide-0 { 
          z-index: 1; 
          background: #3A3D40;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          padding: clamp(20px, 4vw, 40px) clamp(20px, 5vw, 60px);
        }

        .slide.slide-1 { 
          z-index: 2; 
          background: #334a3d;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          padding: clamp(20px, 4vw, 40px) clamp(20px, 5vw, 60px);
          position: relative;
        }

        .slide.slide-2 { 
          z-index: 3; 
          background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          padding: clamp(20px, 4vw, 40px) clamp(20px, 5vw, 60px);
        }

        .slide-content {
          flex: 1;
          padding-right: clamp(15px, 3vw, 40px);
        }

        .slide-image {
          flex: 0 0 35%;
          background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
          border-radius: clamp(12px, 1.5vw, 15px);
          height: clamp(200px, 25vw, 300px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          background-image: url('/assets/Gallery/image3.jpg');
          background-size: cover;
          background-position: center;
        }

        .slide-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          border-radius: clamp(12px, 1.5vw, 15px);
        }

        .vision-content {
          flex: 0 0 60%;
          padding-right: clamp(15px, 3vw, 40px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .vision-image {
          flex: 0 0 35%;
          background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
          border-radius: clamp(12px, 1.5vw, 15px);
          height: clamp(200px, 25vw, 300px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          background-image: url('/assets/Gallery/image1.jpg');
          background-size: cover;
          background-position: center;
        }

        .vision-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          border-radius: clamp(12px, 1.5vw, 15px);
        }

        .mission-content {
          flex: 0 0 60%;
          padding-right: clamp(15px, 3vw, 40px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .mission-image {
          flex: 0 0 35%;
          background: linear-gradient(135deg, #333 0%, #555 100%);
          border-radius: clamp(12px, 1.5vw, 15px);
          height: clamp(200px, 25vw, 300px);
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          background-image: url('/assets/Gallery/image2.jpg');
        }

        .mission-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          border-radius: clamp(12px, 1.5vw, 15px);
        }

        .vision-title {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.5vw, 15px);
          justify-content: flex-start;
          margin-bottom: clamp(15px, 2.5vw, 25px);
        }

        .mission-title {
          display: flex;
          align-items: center;
          gap: clamp(15px, 2vw, 20px);
          justify-content: flex-start;
          margin-bottom: clamp(20px, 3vw, 30px);
        }

        .mission-title-icon {
          width: clamp(50px, 6vw, 70px);
          height: clamp(50px, 6vw, 70px);
          flex-shrink: 0;
        }

        .vision-title-icon {
          width: clamp(50px, 6vw, 70px);
          height: clamp(50px, 6vw, 70px);
          flex-shrink: 0;
        }

        .vision-light-bulb {
          position: absolute;
          bottom: clamp(20px, 3vw, 40px);
          left: 50%;
          transform: translateX(-50%);
          width: clamp(50px, 6vw, 60px);
          height: clamp(50px, 6vw, 60px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bulb-icon {
          width: clamp(40px, 5vw, 50px);
          height: clamp(40px, 5vw, 50px);
          background: #000;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bulb-icon::before {
          content: '';
          position: absolute;
          bottom: clamp(-12px, -1.5vw, -15px);
          left: 50%;
          transform: translateX(-50%);
          width: clamp(24px, 3vw, 30px);
          height: clamp(6px, 0.8vw, 8px);
          background: #000;
          border-radius: 0 0 5px 5px;
        }

        .bulb-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(64px, 8vw, 80px);
          height: clamp(64px, 8vw, 80px);
        }

        .bulb-ray {
          position: absolute;
          width: clamp(1.5px, 0.2vw, 2px);
          height: clamp(10px, 1.2vw, 12px);
          background: #000;
          border-radius: 1px;
        }

        .bulb-ray:nth-child(1) { top: clamp(-16px, -2vw, -20px); left: 50%; transform: translateX(-50%); }
        .bulb-ray:nth-child(2) { top: clamp(4px, 0.5vw, 5px); right: clamp(-16px, -2vw, -20px); transform: rotate(45deg); }
        .bulb-ray:nth-child(3) { bottom: clamp(4px, 0.5vw, 5px); right: clamp(-16px, -2vw, -20px); transform: rotate(-45deg); }
        .bulb-ray:nth-child(4) { bottom: clamp(-16px, -2vw, -20px); left: 50%; transform: translateX(-50%); }
        .bulb-ray:nth-child(5) { bottom: clamp(4px, 0.5vw, 5px); left: clamp(-16px, -2vw, -20px); transform: rotate(45deg); }
        .bulb-ray:nth-child(6) { top: clamp(4px, 0.5vw, 5px); left: clamp(-16px, -2vw, -20px); transform: rotate(-45deg); }

        .rocket-icon {
          position: absolute;
          bottom: clamp(15px, 2vw, 20px);
          left: clamp(15px, 2vw, 20px);
          width: clamp(50px, 6vw, 60px);
          height: clamp(50px, 6vw, 60px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: clamp(40px, 5vw, 50px);
          animation: floatRocket 2.5s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .rocket-icon:hover {
          transform: translateY(-15px) scale(1.05) rotate(-3deg);
        }

        .icon {
          width: clamp(80px, 10vw, 120px);
          height: clamp(80px, 10vw, 120px);
          margin: 0 auto clamp(20px, 3vw, 30px);
        }

        .icons-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: clamp(20px, 3vw, 30px) 0;
          flex-wrap: wrap;
          gap: clamp(15px, 2vw, 20px);
        }

        .icon-small {
          width: clamp(60px, 8vw, 80px);
          height: clamp(60px, 8vw, 80px);
        }

        svg {
          width: 100%;
          height: 100%;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
        }

        .rocket-corner {
          position: absolute;
          bottom: clamp(15px, 2vw, 20px);
          left: clamp(15px, 2vw, 20px);
          width: clamp(50px, 6vw, 60px);
          height: clamp(50px, 6vw, 60px);
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .rocket-corner:hover {
          opacity: 1;
        }

        .slide-title {
          font-size: clamp(1.8rem, 4.5vw, 2.8rem);
          font-weight: 700;
          margin-bottom: clamp(15px, 2.5vw, 25px);
          letter-spacing: clamp(0.5px, 0.1vw, 1px);
          color: #fff;
          line-height: 1.2;
        }

        .slide-description {
          font-size: clamp(0.9rem, 1.8vw, 1.08rem);
          line-height: 1.7;
          color: #ccc;
          max-width: clamp(300px, 55vw, 520px);
        }

        .vision-title h2 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin: 0;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: clamp(1px, 0.2vw, 2px);
          position: relative;
          line-height: 1;
        }

        .mission-title h2 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin: 0;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: clamp(1px, 0.2vw, 2px);
          position: relative;
          line-height: 1;
        }

        .vision-description {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          line-height: 1.8;
          color: #ccc;
          max-width: clamp(300px, 60vw, 580px);
          text-align: left;
        }

        .mission-description {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          line-height: 1.8;
          color: #ccc;
          max-width: clamp(300px, 60vw, 580px);
          text-align: left;
        }

        .section-title {
          position: absolute;
          top: clamp(30px, 5vh, 50px);
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          color: #fff;
          z-index: 100;
          text-align: center;
        }

        /* Large Desktop - 1441px and above */
        @media (min-width: 1441px) {
          .slide {
            width: 80%;
            height: 70vh;
            padding: 60px 40px;
          }

          .slide.slide-0,
          .slide.slide-1,
          .slide.slide-2 {
            padding: 40px 60px;
          }

          .slide-title {
            font-size: 2.8rem;
            margin-bottom: 25px;
          }

          .vision-title h2,
          .mission-title h2 {
            font-size: 3.2rem;
          }

          .slide-description,
          .vision-description,
          .mission-description {
            font-size: 1.08rem;
          }

          .section-title {
            font-size: 3rem;
            top: 50px;
          }
        }

        /* Standard Desktop - 1025px to 1440px */
        @media (max-width: 1440px) and (min-width: 1025px) {
          .slide {
            width: 85%;
            height: 68vh;
          }

          .slide.slide-0,
          .slide.slide-1,
          .slide.slide-2 {
            padding: 35px 50px;
          }
        }

        /* Tablet - 769px to 1024px */
        @media (max-width: 1024px) and (min-width: 769px) {
          .slide.slide-0,
          .slide.slide-1,
          .slide.slide-2 {
            flex-direction: column;
            text-align: center;
            padding: 40px 30px;
            align-items: center;
            height: auto;
            min-height: 65vh;
          }

          .slide-content,
          .vision-content,
          .mission-content {
            padding-right: 0;
            margin-bottom: 30px;
            flex: none;
            width: 100%;
            text-align: center;
            align-items: center;
          }

          .slide-image,
          .vision-image,
          .mission-image {
            max-width: 100%;
            flex: none;
            width: 100%;
          }
          
          .vision-image,
          .slide-image,
          .mission-image {
            height: 200px;
            margin-top: 20px;
          }

          .vision-title,
          .mission-title {
            justify-content: center;
            align-items: center;
          }

          .vision-description,
          .mission-description {
            text-align: center;
            max-width: 100%;
          }

          .slide-description {
            text-align: center;
          }

          .slide-title {
            text-align: center;
          }
        }

          /* Mobile - 481px to 768px */
        @media (max-width: 768px) and (min-width: 481px) {
          .slide {
            width: 90%;
            padding: 30px 25px;
            height: auto;
            min-height: 60vh;
            max-height: 80vh;
          }

          .slide.slide-0,
          .slide.slide-1,
          .slide.slide-2 {
            padding: 30px 20px;
            justify-content: center;
            text-align: center;
            align-items: center;
            flex-direction: column;
            height: auto;
            min-height: 60vh;
          }

          .slide-image,
          .vision-image,
          .mission-image {
            display: none;
          }          .vision-light-bulb {
            display: none;
          }

          .slide-content,
          .vision-content,
          .mission-content {
            padding-right: 0;
            margin-bottom: 0;
            max-width: 100%;
            width: 100%;
            flex: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100%;
          }

          .vision-title,
          .mission-title {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .vision-title-icon,
          .mission-title-icon {
            width: 60px;
            height: 60px;
          }

          .vision-description,
          .mission-description {
            text-align: center;
            max-width: 100%;
          }

          .section-title {
            font-size: 2.6rem;
            top: 30px;
          }

          .slide-title {
            font-size: 2rem;
            text-align: center;
          }

          .vision-title h2,
          .mission-title h2 {
            font-size: 2.2rem;
            text-align: center;
          }

          .slide-description,
          .vision-description,
          .mission-description {
            font-size: 0.95rem;
            text-align: center;
            max-width: 100%;
          }

          .icon {
            width: 100px;
            height: 100px;
          }

          .icon-small {
            width: 60px;
            height: 60px;
          }

          .rocket-corner, .rocket-icon {
            width: 50px;
            height: 50px;
            bottom: 15px;
            left: 15px;
          }

          .icons-container {
            gap: 15px;
          }
        }

        /* Small Mobile - 361px to 480px */
        @media (max-width: 480px) and (min-width: 361px) {
          .slide {
            width: 95%;
            padding: 25px 15px;
            min-height: 55vh;
            max-height: 75vh;
          }

          .slide.slide-0,
          .slide.slide-1,
          .slide.slide-2 {
            height: auto;
            min-height: 55vh;
            padding: 25px 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .slide-content,
          .vision-content,
          .mission-content {
            padding-right: 0;
            margin-bottom: 0;
            max-width: 100%;
            width: 100%;
            flex: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100%;
          }

          .slide-image,
          .vision-image,
          .mission-image {
            display: none;
          }

          .vision-light-bulb {
            display: none;
          }

          .vision-title,
          .mission-title {
            flex-direction: column;
            gap: 8px;
            margin-bottom: 15px;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .vision-title-icon,
          .mission-title-icon {
            width: 50px;
            height: 50px;
          }

          .slide-title {
            font-size: 1.6rem;
            margin-bottom: 15px;
            text-align: center;
          }

          .vision-title h2,
          .mission-title h2 {
            font-size: 1.8rem;
            text-align: center;
          }

          .slide-description,
          .vision-description,
          .mission-description {
            font-size: 0.85rem;
            line-height: 1.6;
            text-align: center;
            max-width: 100%;
          }

          .section-title {
            font-size: 2.2rem;
            top: 20px;
          }
        }

        /* Extra Small Mobile - 281px to 360px */
        @media (max-width: 360px) and (min-width: 281px) {
          .slide {
            width: 98%;
            padding: 20px 12px;
            min-height: 50vh;
            max-height: 70vh;
          }

          .slide.slide-0,
          .slide.slide-1,
          .slide.slide-2 {
            padding: 20px 12px;
            min-height: 50vh;
          }

          .slide-title {
            font-size: 1.4rem;
            margin-bottom: 12px;
          }

          .vision-title h2,
          .mission-title h2 {
            font-size: 1.6rem;
          }

          .slide-description,
          .vision-description,
          .mission-description {
            font-size: 0.8rem;
            line-height: 1.5;
          }

          .section-title {
            font-size: 1.8rem;
            top: 15px;
          }

          .vision-title-icon,
          .mission-title-icon {
            width: 40px;
            height: 40px;
          }

          .rocket-corner, .rocket-icon {
            width: 40px;
            height: 40px;
            bottom: 10px;
            left: 10px;
            font-size: 32px;
          }
        }

        /* Ultra Small Mobile - 280px and below */
        @media (max-width: 280px) {
          .slide {
            width: 100%;
            padding: 15px 8px;
            min-height: 45vh;
            max-height: 65vh;
            border-radius: 10px;
          }

          .slide.slide-0,
          .slide.slide-1,
          .slide.slide-2 {
            padding: 15px 8px;
            min-height: 45vh;
          }

          .slide-title {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }

          .vision-title h2,
          .mission-title h2 {
            font-size: 1.4rem;
          }

          .slide-description,
          .vision-description,
          .mission-description {
            font-size: 0.75rem;
            line-height: 1.4;
          }

          .section-title {
            font-size: 1.6rem;
            top: 10px;
          }

          .vision-title-icon,
          .mission-title-icon {
            width: 35px;
            height: 35px;
          }

          .vision-title,
          .mission-title {
            gap: 6px;
            margin-bottom: 10px;
          }

          .rocket-corner, .rocket-icon {
            width: 35px;
            height: 35px;
            bottom: 8px;
            left: 8px;
            font-size: 28px;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .slide {
            height: auto;
            min-height: 80vh;
            max-height: 90vh;
          }

          .slide.slide-0,
          .slide.slide-1,
          .slide.slide-2 {
            min-height: 80vh;
            padding: 20px;
          }

          .section-title {
            font-size: 2rem;
            top: 20px;
          }

          .slide-title {
            font-size: 1.8rem;
          }

          .vision-title h2,
          .mission-title h2 {
            font-size: 2rem;
          }
        }

        /* Ultra-wide screens - 1921px and above */
        @media (min-width: 1921px) {
          .slide {
            width: 75%;
            max-width: 1400px;
            height: 65vh;
          }

          .slide-title {
            font-size: 3.2rem;
          }

          .vision-title h2,
          .mission-title h2 {
            font-size: 3.6rem;
          }

          .slide-description,
          .vision-description,
          .mission-description {
            font-size: 1.2rem;
          }

          .section-title {
            font-size: 3.5rem;
          }
        }
      `}</style>

      <div className="scroll-container">
        <div className="slide-container">
          <h1 className="section-title">Know the E-CELL</h1>

          <div className="slide slide-0" data-slide="0">
            <div className="slide-content">
              <h2 className="slide-title">WHO WE ARE?</h2>
              <p className="slide-description">
                We are the Entrepreneurship Cell of IIITDM-Kancheepuram, a student-led initiative that promotes innovation and entrepreneurial thinking on campus. Our team comprises aspiring entrepreneurs, leaders, and changemakers dedicated to creating a thriving startup culture.Through events, mentorship, competitions, and networking opportunities, we serve as a launchpad for ideas that have the potential to create real-world impact.
              </p>
            </div>
            <div className="slide-image">
            </div>
            <div className="rocket-icon">🚀</div>
          </div>

          <div className="slide slide-1" data-slide="1">
            <div className="vision-content">
              <div className="vision-title">
                <div className="vision-title-icon">
                  <svg viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h2>VISION</h2>
              </div>
              <p className="vision-description">
                To position E-Cell IIITDM-K as a hub of entrepreneurial excellence, empowering students to become visionary leaders, driving breakthrough innovations, and nurturing ventures that create lasting global impact. We aim to foster a vibrant ecosystem that connects talent, technology, and industry to shape the future of innovation.
              </p>
            </div>
            <div className="vision-image">
            </div>
          </div>

          <div className="slide slide-2" data-slide="2">
            <div className="mission-content">
              <div className="mission-title">
                <div className="mission-title-icon">
                  <svg viewBox="0 0 26 26" stroke="#fff" strokeWidth="2" fill="none">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"></polygon>
                  </svg>
                </div>
                <h2>MISSION</h2>
              </div>
              <p className="mission-description">
                To build a strong entrepreneurial ecosystem at IIITDM-K that equips students with the skills, mindset, and resources to create high-impact startups. We aim to develop future leaders and innovators who can solve real-world problems, drive economic growth, and contribute to national and global progress through entrepreneurship.
              </p>
            </div>
            <div className="mission-image">
            </div>
            <div className="rocket-corner">
              {/* <svg viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="m16 10-4 4-4-4"></path>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;