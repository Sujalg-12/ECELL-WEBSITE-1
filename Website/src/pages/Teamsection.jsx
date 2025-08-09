import React from 'react';
import '../styles/Teamsection.css';

const teamMembers = [
  {
    name: 'Asmit Sahoo',
    role: 'Head Core',
    image: '../assets/Leads/asmit.jpg',
    linkedin: 'https://in.linkedin.com/in/asmitkum',
  },
  {
    name: 'Vishal Singh',
    role: 'Head Core',
    image: '../assets/Leads/Vishal.jpeg',
    linkedin: 'https://www.linkedin.com/in/vishal-singh-800421323/',
  },
  {
    name: 'Rupkatha Suter',
    role: 'Vice Core',
    image: '../assets/Leads/Rupkatha.jpeg',
    linkedin: 'https://linkedin.com/in/shaurya',
  },
  {
    name: 'Ashrith Yathin',
    role: 'Publicity Lead',
    image: '../assets/Leads/Ashrith.jpeg',
    linkedin: 'https://linkedin.com/in/pranil-punekar',
  },
  {
    name: 'Sujal Gupta',
    role: 'Tech Lead',
    image: '../assets/Leads/Sujal.jpeg',
    linkedin: 'https://linkedin.com/in/dev-falgun',
  },
  {
    name: 'Grishmank Parate',
    role: 'Events Lead',
    image: '../assets/Leads/Grishmank.jpeg',
    linkedin: 'https://linkedin.com/in/sarah-johnson',
  }
];

const TeamSection = () => {
  const openLinkedIn = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="homepage-team-section">
      <h2 className="homepage-team-title" data-aos="fade-right">Our Team</h2>
      <p className="homepage-team-subtitle" data-aos="fade-left">An Institution backed up by talented and potential</p>

      <div className="homepage-carousel-container" data-aos="fade-up">
        <div className="homepage-carousel-track">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="homepage-team-member"
              onClick={() => openLinkedIn(member.linkedin)}
            >
              <div className="homepage-member-image-container">
                <img src={member.image} alt={member.name} className="homepage-member-image" />
                <div
                  className="homepage-linkedin-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLinkedIn(member.linkedin);
                  }}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
              <h3 className="homepage-member-name">{member.name}</h3>
              <p className="homepage-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
