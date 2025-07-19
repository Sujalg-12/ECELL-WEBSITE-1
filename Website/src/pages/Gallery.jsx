 import React, { useState, useEffect, useRef } from 'react';
import { Pause, Play } from 'lucide-react';


const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const intervalRef = useRef(null);
  const animationRef = useRef(null);

  const images = [
    {
      id: 1,
      url: '../assets/Gallery/image1.jpg',
      alt: '',
      caption: 'Breathtaking mountain vistas captured at golden hour'
    },
    {
      id: 2,
      url: '../assets/Gallery/image2.jpg',
      alt: '',
      caption: 'Powerful ocean waves crashing against rocky coastlines'
    },
    {
      id: 3,
      url: '../assets/Gallery/image3.jpg',
      alt: '',
      caption: 'Modern urban architecture illuminated by city lights'
    },
    {
      id: 4,
      url: '../assets/Gallery/image4.jpg',
      alt: '',
      caption: 'Mystical forest pathways through ancient woodlands'
    },
    {
      id: 5,
      url: '../assets/Gallery/image5.jpg',
      alt: '',
      caption: 'Spectacular desert sunset painting the sky in vibrant colors'
    },
    {
      id: 6,
      url: '../assets/Gallery/image6.jpeg',
      alt: '',
      caption: 'Majestic waterfall cascading through lush vegetation'
    }
  ];

  const imageWidth = 400;
  const imageGap = 60;
  const totalImageWidth = imageWidth + imageGap;

  const startAnimation = () => {
    const animate = () => {
      setScrollPosition(prev => {
        const newPosition = prev + 1;
        if (newPosition >= totalImageWidth * images.length) return 0;
        return newPosition;
      });

      if (isPlaying) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startAnimation();
    } else {
      stopAnimation();
    }
    return () => stopAnimation();
  }, [isPlaying]);

  useEffect(() => {
    const newIndex = Math.floor(scrollPosition / totalImageWidth) % images.length;
    setCurrentIndex(newIndex);
  }, [scrollPosition]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getImageScale = (index, position) => {
    const screenCenter = window.innerWidth / 2;
    const imageCenter = position + imageWidth / 2;
    const distance = Math.abs(screenCenter - imageCenter);

    if (distance < imageWidth / 2) {
      const scaleFactor = 1 + (0.08 * (1 - distance / (imageWidth / 2)));
      return Math.min(scaleFactor, 1.08);
    }
    return 1;
  };

  const getImageOpacity = (index, position) => {
    const screenCenter = window.innerWidth / 2;
    const imageCenter = position + imageWidth / 2;
    const distance = Math.abs(screenCenter - imageCenter);

    if (distance < imageWidth) return 1;
    if (distance < imageWidth * 2) return 0.7;
    return 0.5;
  };

  const extendedImages = [...images, ...images, ...images];

  return (
    <section className="relative py-20 bg-black z-[2] overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-left">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
        </div>

        
      </div>

      <div className="relative w-full h-[500px] bg-gradient-to-r from-black/20 via-transparent to-black/20 backdrop-blur-sm border-y-2 border-orange-500/30 shadow-[0_0_50px_rgba(244,103,9,0.3),inset_0_0_50px_rgba(244,103,9,0.1)]">
  <div
    className="absolute inset-0 rounded-none border-2 border-transparent bg-gradient-to-r from-orange-500/40 via-amber-400/40 to-orange-500/40 bg-clip-border animate-pulse"
    style={{
      background: 'linear-gradient(90deg, rgba(244,103,9,0.4) 0%, rgba(255,165,0,0.4) 50%, rgba(244,103,9,0.4) 100%)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude'
    }}
  />
 


        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div 
            className="flex items-center h-full"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              width: `${totalImageWidth * extendedImages.length}px`
            }}
          >
            {extendedImages.map((image, index) => {
              const position = (index * totalImageWidth) - scrollPosition;
              const scale = getImageScale(index, position);
              const opacity = getImageOpacity(index, position);

              return (
                <div
                  key={`img-${index}`}
                  className="flex-shrink-0 transition-all duration-300 ease-out"
                  style={{
                    width: `${imageWidth}px`,
                    marginRight: `${imageGap}px`,
                    transform: `scale(${scale})`,
                    opacity: opacity
                  }}
                >
                  <div className="relative group h-96">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                      loading="lazy"
                    />
                    {scale > 1.02 && (
                      <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(244,103,9,0.5)]
 pointer-events-none" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {image.alt}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-8">
        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setScrollPosition(index * totalImageWidth);
                setCurrentIndex(index);
              }}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-purple-500 w-8 shadow-[0_0_10px_rgba(168,85,247,0.5)]' 
                  : 'bg-white/20 w-4 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
