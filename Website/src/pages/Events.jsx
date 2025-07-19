import React, { useState, useEffect } from 'react';
import './../styles/Events.css';
import Nav from './nav.jsx'
import Footer from './Footer.jsx';
import AOS from 'aos';

const Events = () => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    status: [],
    type: [],
    registration: []
  });

  
useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      offset: 100,
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const eventsData = [
    {
      title: "Pitch On Pitch",
      description: "Flagship event, Showcase your ideas to an investor panel",
      status: "upcoming",
      type: "competition",
      registration: "open",
      image: "../assets/Eventimages/Pitchonpitch.png",
      videos: ["./videos/pitch_on_pitch.mp4", "./videos/pitch_on_pitch_alternate.mp4"]
    },
    {
      title: "Synergy Shuffle",
      description: "Fast-paced competition that tests negotiation and strategy",
      status: "live",
      type: "workshop",
      registration: "open",
      image: "../assets/Eventimages/SynergyShuffle.png",
      videos: ["./videos/pitch_on_pitch.mp4", "./videos/pitch_on_pitch_alternate.mp4"]
    },
    {
      title: "Entreperenur for a day",
      description: "Teams get hands-on experience in business development, teamwork, and market validation.",
      status: "completed",
      type: "competition",
      registration: null,
      image: "../assets/Eventimages/EFD.png",
      videos: ["./videos/pitch_on_pitch.mp4", "./videos/pitch_on_pitch_alternate.mp4"]
    },
    {
      title: "Startup Expo",
      description: "Showcase young founders to investors, mentors and industry experts.",
      status: "upcoming",
      type: "talk",
      registration: null,
      image: "../assets/Eventimages/StartupExpo.png",
      videos: ["./videos/pitch_on_pitch.mp4", "./videos/pitch_on_pitch_alternate.mp4"]
    },
    {
      title: "Financial Mastermind",
      description: "Five-day trading simulation to learn market analysis and risks.",
      status: "live",
      type: "discussion",
      registration: "open",
      image: "../assets/Eventimages/FinancialMastermind.png",
      videos: ["./videos/pitch_on_pitch.mp4", "./videos/pitch_on_pitch_alternate.mp4"]
    },
    {
      title: "Buisness Quiz",
      description: "Quiz on entrepreneurship, startups, and the economy.",
      status: "upcoming",
      type: "talk",
      registration: null,
      image: "../assets/Eventimages/BQuiz.png",
      videos: ["./videos/pitch_on_pitch.mp4", "./videos/pitch_on_pitch_alternate.mp4"]
    }
  ];

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (!isMobile) {
      // Initialize video hover effects only on non-mobile devices
      const eventCards = document.querySelectorAll('.event-card');
      
      eventCards.forEach(card => {
        const image = card.querySelector('.event-image');
        const video = card.querySelector('.event-video');
        
        if (image && video) {
          const handleMouseEnter = () => {
            video.currentTime = 0;
            video.play().catch(e => {
              console.log('Video play failed:', e);
            });
          };
          
          const handleMouseLeave = () => {
            video.pause();
            video.currentTime = 0;
          };
          
          image.addEventListener('mouseenter', handleMouseEnter);
          image.addEventListener('mouseleave', handleMouseLeave);
          
          // Cleanup
          return () => {
            image.removeEventListener('mouseenter', handleMouseEnter);
            image.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      });
    }
  }, []);

  const toggleBookmark = (eventTitle) => {
    setBookmarkedEvents(prev => {
      if (prev.includes(eventTitle)) {
        return prev.filter(event => event !== eventTitle);
      } else {
        return [...prev, eventTitle];
      }
    });
  };

  const toggleFilter = (filterType, filterValue) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[filterType].includes(filterValue)) {
        newFilters[filterType] = newFilters[filterType].filter(f => f !== filterValue);
      } else {
        newFilters[filterType] = [...newFilters[filterType], filterValue];
      }
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      status: [],
      type: [],
      registration: []
    });
    setSearchTerm('');
  };

  const filteredEvents = eventsData.filter(event => {
    // Status filter
    if (activeFilters.status.length > 0 && !activeFilters.status.includes(event.status)) {
      return false;
    }
    
    // Type filter
    if (activeFilters.type.length > 0 && !activeFilters.type.includes(event.type)) {
      return false;
    }
    
    // Registration filter
    if (activeFilters.registration.length > 0) {
      if (!event.registration || !activeFilters.registration.includes(event.registration)) {
        return false;
      }
    }
    
    // Search filter
    if (searchTerm) {
      const title = event.title.toLowerCase();
      const description = event.description.toLowerCase();
      const search = searchTerm.toLowerCase();
      if (!title.includes(search) && !description.includes(search)) {
        return false;
      }
    }
    
    return true;
  });

  // Sort events by bookmarks
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const aBookmarked = bookmarkedEvents.includes(a.title);
    const bBookmarked = bookmarkedEvents.includes(b.title);
    
    if (aBookmarked && !bBookmarked) return -1;
    if (!aBookmarked && bBookmarked) return 1;
    return 0;
  });

  const viewMore = (eventTitle) => {
    alert(`View more details for: ${eventTitle}\n\nThis would typically open a detailed event page or modal.`);
  };

  const getStatusTag = (status) => {
    const statusMap = {
      live: { text: 'Live', class: 'live' },
      completed: { text: 'Completed', class: 'completed' },
      upcoming: { text: 'Upcoming', class: 'upcoming' }
    };
    return statusMap[status] || { text: status, class: '' };
  };

return (
    <>
        <Nav />
        <div className="events-container" data-aos="fade-up">
            <div className="header">
                <h1>EVENTS</h1>
                {/* <p>©️ by E-Cell IITDM Kancheepuram. Innovate Ideate Inspire Implement & Fueled by ambition.</p> */}
            </div>

            <div className="content">
                <div className="sidebar">
                    <div className="all-events">
                        <h2>All Events</h2>
                        <input 
                            type="text" 
                            className="search-box" 
                            placeholder="search here.." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="filters">
                        <h3>Filters</h3>
                        
                        <div className="filter-group">
                            <label>Status:</label>
                            <div className="filter-buttons">
                                {['live', 'completed', 'upcoming'].map(status => (
                                    <button 
                                        key={status}
                                        className={`filter-btn ${activeFilters.status.includes(status) ? 'active' : ''}`}
                                        onClick={() => toggleFilter('status', status)}
                                    >
                                        {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-group">
                            <label>Type:</label>
                            <div className="filter-buttons">
                                {['talk', 'workshop', 'competition', 'discussion'].map(type => (
                                    <button 
                                        key={type}
                                        className={`filter-btn ${activeFilters.type.includes(type) ? 'active' : ''}`}
                                        onClick={() => toggleFilter('type', type)}
                                    >
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="filter-group">
                            <label>Registration:</label>
                            <div className="filter-buttons">
                                <button 
                                    className={`filter-btn ${activeFilters.registration.includes('open') ? 'active' : ''}`}
                                    onClick={() => toggleFilter('registration', 'open')}
                                >
                                    Open
                                </button>
                            </div>
                        </div>

                        <button className="clear-filters" onClick={clearAllFilters}>Clear All</button>
                    </div>
                    
                    <div className="archive">
                        <h2>Archive</h2>
                        <a href="/archive" className="archive-link">View All Events</a>
                    </div>
                </div>

                <div className="events-grid">
                    {sortedEvents.map((event, index) => (
                        <div 
                            key={index}
                            className={`event-card ${bookmarkedEvents.includes(event.title) ? 'bookmarked' : ''}`}
                        >
                            <button 
                                className={`bookmark-btn ${bookmarkedEvents.includes(event.title) ? 'bookmarked' : ''}`}
                                onClick={() => toggleBookmark(event.title)}
                            >
                                ★
                            </button>
                            <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}>
                                <video className="event-video" muted loop>
                                    {event.videos.map((video, videoIndex) => (
                                        <source key={videoIndex} src={video} type="video/mp4" />
                                    ))}
                                </video>
                            </div>
                            <div className="event-content">
                                <div className="event-title">{event.title}</div>
                                <div className="event-tags">
                                    <span className={`event-tag tag-status ${getStatusTag(event.status).class}`}>
                                        {getStatusTag(event.status).text}
                                    </span>
                                    <span className="event-tag tag-type">
                                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                    </span>
                                    {event.registration && (
                                        <span className="event-tag tag-registration">Reg Open</span>
                                    )}
                                </div>
                                <div className="event-description">{event.description}</div>
                                <button 
                                    className="view-more-btn" 
                                    onClick={() => viewMore(event.title)}
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
);
};

export default Events;