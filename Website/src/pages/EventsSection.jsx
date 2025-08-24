import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, MapPin, Calendar, Clock, Users, Link, Globe, Eye } from 'lucide-react';

function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef(null);

  // Enhanced event data with full details
  const events = [
    {
      id: 1,
      title: "INNOVYUVA",
      date: "August 25, 2025",
      time: "4:00 PM - 7:00 PM",
      location: "Senate Hall",
      image: "/assets/Eventimages/Innovyuva.png",
      description: "An exclusive pitching competition for young innovators and aspiring entrepreneurs. Present your startup ideas to industry experts, investors, and mentors while competing for exciting prizes and funding opportunities.",
      isOnline: false,
      attendees: 100,
      category: "Pitching Competition",
      organizer: "ECELL-IIITDMK"
    },
    {
      id: 2,
      title: "Synergy Shuffle",
      date: "August 22, 2025",
      time: "9:00 AM - 6:00 PM",
      image: "/assets/Eventimages/SynergyShuffle.png",
      description: "A fast-paced team collaboration event testing your negotiation and strategic thinking skills.",
      isOnline: false,
      location: "H01",
      meetingLink: "https://zoom.us/j/123456789",
      attendees: 2500,
      category: "Technology",
      organizer: "ECELL-IIITDMK"
    },
    {
      id: 3,
      title: "Entrepreneur for the Day",
      date: "September 10, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Old Library",
      image: "/assets/Eventimages/EFD.png",
      description: "Experience the entrepreneurial journey firsthand with real business challenges and market simulations.",
      isOnline: false,
      attendees: 300,
      category: "Entrepreneurship",
      organizer: "ECELL-IIITDMK"
    },
    {
      id: 4,
      title: "Startup Expo",
      date: "October 5, 2025",
      time: "12:00 PM - 8:00 PM",
      location: "Old Library",
      image: "/assets/Eventimages/StartupExpo.png",
      description: "Connect with innovative startups, investors, and industry leaders at our premier startup showcase event.",
      isOnline: false,
      attendees: 1200,
      category: "Exhibitions",
      organizer: "ECELL-IIITDMK"
    },
    {
      id: 5,
      title: "Financial Mastermind",
      date: "November 18, 2025",
      time: "2:00 PM - 9:00 PM",
      image: "/assets/Eventimages/FinancialMastermind.png",
      description: "Master financial markets through intensive trading simulations and investment strategy workshops.",
      isOnline: false,
      location: "H02",
      meetingLink: "https://fashionweek.virtual/live",
      attendees: 100,
      category: "Finance",
      organizer: "ECELL-IIITDMK"
    },
    {
      id: 6,
      title: "Business Quiz",
      date: "December 3, 2024",
      time: "3:00 PM - 7:00 PM",
      location: "H15",
      image: "/assets/Eventimages/BQuiz.png",
      description: "Test your business acumen and entrepreneurship knowledge in this ultimate business quiz challenge.",
      isOnline: false,
      attendees: 150,
      category: "Quiz",
      organizer: "ECELL-IIITDMK"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isDragging || isModalOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, isModalOpen, events.length]);

  // Effect to control body scroll when modal opens/closes
  useEffect(() => {
    if (isModalOpen) {
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Smooth scroll to specific index
  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = 320;
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? events.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % events.length;
    scrollToIndex(newIndex);
  };

  // Modal handlers
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setTimeout(() => setIsAutoPlaying(true), 500);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 1000);
    
    if (carouselRef.current) {
      const cardWidth = 320;
      const scrollPosition = carouselRef.current.scrollLeft;
      const nearestIndex = Math.round(scrollPosition / cardWidth);
      const clampedIndex = Math.max(0, Math.min(nearestIndex, events.length - 1));
      scrollToIndex(clampedIndex);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 1000);
    
    if (carouselRef.current) {
      const cardWidth = 320;
      const scrollPosition = carouselRef.current.scrollLeft;
      const nearestIndex = Math.round(scrollPosition / cardWidth);
      const clampedIndex = Math.max(0, Math.min(nearestIndex, events.length - 1));
      scrollToIndex(clampedIndex);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current && !isDragging) {
      const cardWidth = 320;
      const scrollPosition = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(Math.max(0, Math.min(newIndex, events.length - 1)));
      }
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Removed unused Spline viewer script injection for performance

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      {/* Events Title */}
      <h1 className="text-white text-6xl md:text-6xl font-bold mb-16 tracking-wider" data-aos="fade-up">
        EVENTS
      </h1>

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl" data-aos="fade-up">
        {/* Scrollable Carousel */}
        <div
          ref={carouselRef}
          className={`flex gap-10 overflow-x-auto scrollbar-hide pb-4 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: isDragging ? 'auto' : 'smooth'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
        >
          {events.map((event, index) => (
            <div
              key={event.id}
              onClick={() => openModal(event)}
              className="group relative flex-shrink-0 w-70 h-80 md:w-80 md:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out md:hover:scale-110 md:hover:shadow-3xl md:hover:rotate-1 select-none cursor-pointer"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                scrollSnapAlign: 'start'
              }}
            >
              {/* Enhanced Overlay - Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Desktop Content - Full information on hover */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                {/* Additional background for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent rounded-b-2xl"></div>
                
                {/* Content with relative positioning to stay above background */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    {event.isOnline ? (
                      <Globe className="w-4 h-4 text-green-400" />
                    ) : (
                      <MapPin className="w-4 h-4 text-blue-400" />
                    )}
                    <span className="text-xs font-medium text-gray-200 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                      {event.isOnline ? 'Online Event' : 'In-Person'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 text-white drop-shadow-lg">{event.title}</h3>
                  <p className="text-sm opacity-95 mb-1 text-white drop-shadow-md">{event.date}</p>
                  <p className="text-sm opacity-90 mb-2 line-clamp-1 text-white drop-shadow-md">{event.isOnline ? 'Virtual Event' : event.location}</p>
                  <p className="text-xs opacity-85 mb-3 line-clamp-none text-white drop-shadow-md">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 inline-block text-white">
                      {event.attendees} attendees
                    </div>
                    <div className="text-xs bg-blue-500/30 backdrop-blur-sm rounded-full px-3 py-1 inline-block text-white">
                      {event.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Content - Simplified information always visible */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 text-white">
                {/* Additional background for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent rounded-b-2xl"></div>
                
                {/* Content with relative positioning to stay above background */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-white drop-shadow-lg line-clamp-2">{event.title}</h3>
                  
                  {/* Date */}
                  <p className="text-sm opacity-95 mb-2 text-white drop-shadow-md">{event.date}</p>
                  
                  {/* Location/Type and Category Row */}
                  <div className="flex items-center justify-between mb-3">
                    {/* Left: Location/Type */}
                    <div className="flex items-center gap-2">
                      {event.isOnline ? (
                        <Globe className="w-4 h-4 text-green-400" />
                      ) : (
                        <MapPin className="w-4 h-4 text-blue-400" />
                      )}
                      <span className="text-xs text-white drop-shadow-md">
                        {event.isOnline ? 'Online' : event.location}
                      </span>
                    </div>
                    
                    {/* Right: Category */}
                    <div className="text-xs bg-blue-500/40 backdrop-blur-sm rounded-full px-3 py-1 text-white">
                      {event.category}
                    </div>
                  </div>
                  
                  {/* View More Button */}
                  <div className="flex justify-end">
                    <button className="flex items-center gap-1 text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-white hover:bg-white/30 transition-colors duration-200">
                      <Eye className="w-3 h-3" />
                      View More
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover glow effect - only on desktop */}
              <div className="absolute inset-0 rounded-2xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{
                     boxShadow: '0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)'
                   }} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group z-10"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group z-10"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-12 gap-3">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/30 hover:bg-white/50 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center text-white/60">
        <p className="text-sm">     </p>
      </div>

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-black rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl transform transition-all duration-300 scale-100 relative">
            {/* Fixed Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] rounded-3xl">
              {/* Modal Header */}
              <div className="relative">
                <div
                  className="h-64 bg-cover bg-center rounded-t-3xl"
                  style={{
                    backgroundImage: `url(${selectedEvent.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {selectedEvent.isOnline ? (
                        <Globe className="w-5 h-5 text-green-400" />
                      ) : (
                        <MapPin className="w-5 h-5 text-blue-400" />
                      )}
                      <span className="text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        {selectedEvent.isOnline ? 'Online Event' : 'In-Person Event'}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold">{selectedEvent.title}</h2>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
              {/* Event Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold">{selectedEvent.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-semibold">{selectedEvent.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-500">Expected Attendees</p>
                    <p className="font-semibold">{selectedEvent.attendees.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold">{selectedEvent.category}</p>
                  </div>
                </div>
              </div>

              {/* Location or Meeting Link */}
              <div className="mb-8">
                {selectedEvent.isOnline ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-green-800">Online Event</h3>
                    </div>
                    <p className="text-green-700 mb-4">Join this event from anywhere in the world!</p>
                    <div className="flex items-center gap-3">
                      <Link className="w-5 h-5 text-green-600" />
                      <div className="flex-1">
                        <p className="text-sm text-green-600 mb-1">Meeting Link</p>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={selectedEvent.meetingLink || ''}
                            readOnly
                            className="flex-1 bg-white border border-green-300 rounded-lg px-3 py-2 text-sm"
                          />
                          <button
                            onClick={() => copyToClipboard(selectedEvent.meetingLink || '')}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors duration-200"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-blue-800">Event Location</h3>
                    </div>
                    <p className="text-blue-700 mb-2">Join us in person at:</p>
                    <p className="text-lg font-semibold text-blue-900">{selectedEvent.location}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">About This Event</h3>
                <p className="text-white leading-relaxed">{selectedEvent.description}</p>
              </div>

              {/* Organizer */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-500 mb-1">Organized by</p>
                <p className="font-semibold text-lg">{selectedEvent.organizer}</p>
              </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200">
                    Register Now
                  </button>
                  <button className="px-6 py-3 border border-gray-300 rounded-xl font-semibold bg-black text-white transition-all duration-300 hover:bg-white hover:text-black">
                    Share Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;