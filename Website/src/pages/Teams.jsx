import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Teams.css';
import Nav from './nav.jsx';
import Footer from './Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const teams = [
  {
    name: 'Faculty Advisor',
    quote: 'Guiding the way.',
    members: [
      { name: 'Dr. Sudhir Varadarajan', image: '/assets/mentor/Sudhir.jpeg', linkedin: '#', github: '#' },
    ]
  },
  {
    name: 'Head Core',
    quote: 'Leading from the front.',
    members: [
      { name: 'Asmit', image: '/assets/Leads/Asmit.jpeg', linkedin: '#', github: '#' },
      { name: 'Vishal', image: '/assets/Leads/Vishal.jpeg', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Vice Core',
    quote: 'Supporting excellence.',
    members: [
      { name: 'Rupkatha', image: '/assets/Leads/Rupkatha.jpeg', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Leads',
    quote: 'Guiding each step forward.',
    members: [
      { name: 'Ashrith', image: '/assets/Leads/Ashrith.jpeg', linkedin: '#', github: '#' },
      { name: 'Sujal', image: '/assets/Leads/Sujal.jpeg', linkedin: '#', github: '#' },
      { name: 'Grishmank', image: '/assets/Leads/Grishmank.jpeg', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Events & Competitions',
    lead: { name: 'Grishmank', image: '/assets/Leads/Grishmank.jpeg', linkedin: '#', github: '#' },
    quote: 'Where ideas meet execution.',
    members: [
      { name: 'Roshni', image: '/assets/Teamsimg/roshini.png', linkedin: '#', github: '#' },
      { name: 'Gopal krishna nihal', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'CHIRANTHAN S', image: '/assets/Teamsimg/chiranthan.png', linkedin: '#', github: '#' },
      { name: 'Jatin kumar', image: '/assets/Teamsimg/jatin.png', linkedin: '#', github: '#' },
      { name: 'Love Jadon', image: '/assets/Teamsimg/love.png', linkedin: '#', github: '#' },
      { name: 'Anany Pratap Singh', image: '/assets/Teamsimg/aps.png', linkedin: '#', github: '#' },
      { name: 'Sushant Kumar', image: '/assets/Teamsimg/sushant.png', linkedin: '#', github: '#' },
      { name: 'Deethiya Priyadharshini', image: '/assets/Teamsimg/deethiya.png', linkedin: '#', github: '#' },
      { name: 'Chirag Bansal', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Sponsorship & Collaborations',
    lead: { name: 'Asmit', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
    quote: 'Collaboration breeds innovation.',
    members: [
      { name: 'Soureesh', image: '/assets/Teamsimg/soureesh.png', linkedin: '#', github: '#' },
      { name: 'Fedal Castro', image: '/assets/Teamsimg/castro.png', linkedin: '#', github: '#' },
      { name: 'P Sri Charan Reddy', image: '/assets/Teamsimg/sri.png', linkedin: '#', github: '#' },
      { name: 'Sahiti Adhikarla', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'S.Haridharan', image: '/assets/Teamsimg/hari.png', linkedin: '#', github: '#' },
      { name: 'Sagar kumar', image: '/assets/Teamsimg/sagar.png', linkedin: '#', github: '#' },
      { name: 'S Harris', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'B Harini', image: '/assets/Teamsimg/harini.png', linkedin: '#', github: '#' },
      { name: 'Anjana Chandru', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Tech',
    lead: { name: 'Sujal', image: '/assets/Teamsimg/sujal.png', linkedin: '#', github: '#' },
    quote: 'Powered by innovation and code.',
    members: [
      { name: 'Shivang Pandey', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Santhana Sreenivasa S', image: '/assets/Teamsimg/santhana.png', linkedin: '#', github: '#' },
      { name: 'S.Hyenesteen Samuel', image: '/assets/Teamsimg/samuel.png', linkedin: '#', github: '#' },
      { name: 'P Sai Shreyansh', image: '/assets/Teamsimg/shreyansh.png', linkedin: '#', github: '#' },
      { name: 'Yashwanth S', image: '/assets/Teamsimg/yashwanth.png', linkedin: '#', github: '#' },
      { name: 'Shreya Jha', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Yasash', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Publicity & Social Media',
    lead: { name: 'Ashrith', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
    quote: 'Your vibe attracts your tribe.',
    members: [
      { name: 'Karthikeyan R S', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'I V S Akhil', image: '/assets/Teamsimg/akhil.png', linkedin: '#', github: '#' },
      { name: 'Sai akshay Potnuru', image: '/assets/Teamsimg/akshay.png', linkedin: '#', github: '#' },
      { name: 'Pranjal Chouhan', image: '/assets/Teamsimg/pranjal.png', linkedin: '#', github: '#' },
      { name: 'Ayush Jain', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Shreya Senthilkumar', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Veda Pragna chimakurthi', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Praneeth Bollu', image: '/assets/Teamsimg/praneeth.png', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Content & Social Outreach',
    lead: { name: 'Asmit', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
    quote: 'Voices that echo ideas.',
    members: [
      { name: 'Ch.Pallavi', image: '/assets/Teamsimg/pallavi.png', linkedin: '#', github: '#' },
      { name: 'B.NIHANTH', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Dharra R', image: '/assets/Teamsimg/dhara.png', linkedin: '#', github: '#' },
      { name: 'Bhavana sri', image: '/assets/Teamsimg/bhavana.png', linkedin: '#', github: '#' },
      { name: 'R DHARMENDRA', image: '/assets/Teamsimg/dharmendra.png', linkedin: '#', github: '#' },
      { name: 'Suranjana Mary', image: '/assets/Teamsimg/mary.png', linkedin: '#', github: '#' },
      { name: 'Priyadarshan N', image: '/assets/Teamsimg/nagarajan.png', linkedin: '#', github: '#' },
      { name: 'K.Nihaal Sekhar', image: '/assets/Teamsimg/nihaal.png', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Startup Innovation',
    lead: { name: 'Vishal', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
    quote: 'Dream. Dare. Do.',
    members: [
      { name: 'Raghul Vishwa S', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Sreevathsan V', image: '/assets/Teamsimg/sreevathsan.png', linkedin: '#', github: '#' },
      { name: 'ayyas vishnu', image: '/assets/Teamsimg/vishnu.png', linkedin: '#', github: '#' },
      { name: 'Ayush Gupta', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Vinay sharma', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Vivek Dhotre', image: '/assets/Teamsimg/vivek.png', linkedin: '#', github: '#' },
      { name: 'Laxmi nivas maroju', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' }
    ]
  }
];


const Intro = () => (
  <div className="intro">
    <h1>MEET OUR <span className="highlight">TALENTED TEAM</span></h1>
    <div className="quote">"None of us is as smart as all of us."<br />– Ken Blanchard</div>
  </div>
);

const TeamMemberCard = ({ name, image, isLead, parentTeam, linkedin, github }) => {
  const isSpecial = parentTeam === 'Faculty Advisor' || parentTeam === 'Head Core' || parentTeam === 'Vice Core' || parentTeam === 'Leads';
  const roleText = isSpecial
    ? (parentTeam === 'Head Core' ? 'Club Head Core' : 
       (parentTeam === 'Vice Core' ? 'Club Vice Core' : 
       (parentTeam === 'Faculty Advisor' ? 'Faculty Advisor' : 'Club Leads')))
    : isLead
    ? 'Team Lead'
    : 'Team Member';

  return (
    <div className={`team-member ${isSpecial ? 'lead-hover' : ''}`}>
      <div className="member-image-container">
        <img
          className="member-image"
          src={image || `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`}
          alt={name}
        />
        <div className="overlay">
          <div className="icon-links">
            <a href={linkedin || '#'} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href={github || '#'} target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
          <div className="member-name">{name}</div>
          <div className="member-role">{roleText}</div>
        </div>
      </div>
    </div>
  );
};

const TeamGroup = ({ name, lead, members, quote }) => {
  const isCompact = name === 'Head Core' || name === 'Vice Core' || name === 'Leads';
  const shouldCenterLast = members.length % 4 === 1;
  const memberGridClass = `member-grid${isCompact ? ` ${name.toLowerCase().replace(/\s+/g, '-')}-grid` : ''}${shouldCenterLast ? ' center-last' : ''}`;

  return (
    <div className="team-group">
      <h2>{name}</h2>
      <p className="team-quote">"{quote}"</p>
      {lead && (
        <div className="team-grid">
          <TeamMemberCard
            name={lead.name}
            image={lead.image}
            isLead={true}
            parentTeam={name}
            linkedin={lead.linkedin}
            github={lead.github}
          />
        </div>
      )}
      <div className={memberGridClass}>
        {members.map((member, i) => (
          <TeamMemberCard
            key={i}
            name={member.name}
            image={member.image}
            isLead={isCompact}
            parentTeam={name}
            linkedin={member.linkedin}
            github={member.github}
          />
        ))}
      </div>
      <hr style={{ marginTop: '40px', borderColor: '#333' }} />
    </div>
  );
};

const EcellTeamsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <Nav />
      <Intro />
      <div className="team-section" data-aos="fade-up">
        {teams.map((team, idx) => (
          <TeamGroup
            key={idx}
            name={team.name}
            lead={team.lead}
            members={team.members}
            quote={team.quote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EcellTeamsPage;