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
      { name: 'Dr. Raguraman Munusamy', image: '/assets/mentor/raguraman.jpeg', linkedin: 'https://www.linkedin.com/in/raguraman-munusamy-9452aa11/', github: '#' },
    ]
  },
  {
    name: 'Head Core',
    quote: 'Leading from the front.',
    members: [
      { name: 'Asmit', image: '/assets/Leads/Asmit.jpeg', linkedin: 'https://in.linkedin.com/in/asmitkum', github: '#' },
      { name: 'Vishal', image: '/assets/Leads/Vishal.jpeg', linkedin: 'https://www.linkedin.com/in/vishal-singh-800421323/', github: '#' }
    ]
  },
  {
    name: 'Vice Core',
    quote: 'Supporting excellence.',
    members: [
      { name: 'Rupkatha', image: '/assets/Leads/Rupkatha.jpeg', linkedin: 'https://www.linkedin.com/in/rupkatha-suter', github: '#' }
    ]
  },
  {
    name: 'Leads',
    quote: 'Guiding each step forward.',
    members: [
      { name: 'Ashrith', image: '/assets/Leads/Ashrith.jpeg', linkedin: 'https://www.linkedin.com/in/ashrithyathin/', github: 'https://github.com/Ashrith-Yathin' },
      { name: 'Sujal', image: '/assets/Leads/Sujal.jpeg', linkedin: 'https://www.linkedin.com/in/sujal-gupta-597b02375/', github: '#' },
      { name: 'Grishmank', image: '/assets/Leads/Grishmank.jpeg', linkedin: 'https://www.linkedin.com/in/grishmank-parate-91466728a/', github: '#' }
    ]
  },
  {
    name: 'Events & Competitions',
    lead: { name: 'Grishmank', image: '/assets/Leads/Grishmank.jpeg', linkedin: 'https://www.linkedin.com/in/grishmank-parate-91466728a/', github: '#' },
    quote: 'Where ideas meet execution.',
    members: [
      { name: 'Roshni', image: '/assets/Teamsimg/roshini.png', linkedin: '#', github: '#' },
      { name: 'Gopal krishna nihal', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'CHIRANTHAN S', image: '/assets/Teamsimg/chiranthan.png', linkedin: 'https://www.linkedin.com/in/chiranthan-suresh-251a00357', github: '#' },
      { name: 'Jatin kumar', image: '/assets/Teamsimg/jatin.png', linkedin: 'https://www.linkedin.com/in/jatin-kumar-b7b380321', github: 'https://github.com/jatincode2004' },
      { name: 'Love Jadon', image: '/assets/Teamsimg/love.png', linkedin: '#', github: '#' },
      { name: 'Anany Pratap Singh', image: '/assets/Teamsimg/aps.png', linkedin: '#', github: '#' },
      { name: 'Sushant Kumar', image: '/assets/Teamsimg/sushant.png', linkedin: '#', github: '#' },
      { name: 'Deethiya Priyadharshini', image: '/assets/Teamsimg/deethiya.png', linkedin: '#', github: '#' },
      { name: 'Chirag Bansal', image: '/assets/Teamsimg/noprofile.png', linkedin: 'https://www.linkedin.com/in/chirag-bansal-46a7b6347', github: 'https://github.com/chiragb3005' }
    ]
  },
  {
    name: 'Sponsorship & Collaborations',
    lead: { name: 'Asmit', image: '/assets/Leads/Asmit.jpeg', linkedin: 'https://in.linkedin.com/in/asmitkum', github: '#' },
    quote: 'Collaboration breeds innovation.',
    members: [
      { name: 'Soureesh', image: '/assets/Teamsimg/soureesh.png', linkedin: 'https://www.linkedin.com/in/soureesh-p-8046472a9', github: '#' },
      { name: 'Fedal Castro', image: '/assets/Teamsimg/castro.png', linkedin: '#', github: '#' },
      { name: 'P Sri Charan Reddy', image: '/assets/Teamsimg/sri.png', linkedin: 'https://www.linkedin.com/in/sri-charan-reddy-964b7636a', github: '#' },
      { name: 'Sahiti Adhikarla', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'S.Haridharan', image: '/assets/Teamsimg/hari.png', linkedin: 'https://www.linkedin.com/in/haridharan-shankar-256187324', github: 'https://github.com/HARIDHARAN-IIITDMK' },
      { name: 'Sagar kumar', image: '/assets/Teamsimg/sagar.png', linkedin: 'https://www.linkedin.com/in/sagar-kumar-638276370', github: '#' },
      { name: 'S Harris', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'B Harini', image: '/assets/Teamsimg/harini.png', linkedin: '#', github: '#' },
      { name: 'Anjana Chandru', image: '/assets/Teamsimg/noprofile.png', linkedin: 'https://www.linkedin.com/in/anjana-chandru-b8b4a0373', github: 'https://github.com/itsjanajna' }
    ]
  },
  {
    name: 'Tech',
    lead: { name: 'Sujal', image: '/assets/Teamsimg/sujal.png', linkedin: 'https://www.linkedin.com/in/sujal-gupta-597b02375/', github: '#' },
    quote: 'Powered by innovation and code.',
    members: [
      { name: 'Shivang Pandey', image: '/assets/Teamsimg/noprofile.png', linkedin: 'https://www.linkedin.com/in/shivang-pandey-4b0092351', github: '#' },
      { name: 'Santhana Sreenivasa S', image: '/assets/Teamsimg/santhana.png', linkedin: 'https://www.linkedin.com/in/santhana-sreenivasa-selvaraj-5674bb37a', github: 'https://github.com/me24b1017' },
      { name: 'S.Hyenesteen Samuel', image: '/assets/Teamsimg/samuel.png', linkedin: '#', github: '#' },
      { name: 'P Sai Shreyansh', image: '/assets/Teamsimg/shreyansh.png', linkedin: '#', github: '#' },
      { name: 'Yashwanth S', image: '/assets/Teamsimg/yashwanth.png', linkedin: '#', github: '#' },
      { name: 'Shreya Jha', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Yasash', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Anjana Chandru', image: '/assets/Teamsimg/noprofile.png', linkedin: 'https://www.linkedin.com/in/anjana-chandru-b8b4a0373', github: 'https://github.com/itsjanajna' }
    ]
  },
  {
    name: 'Publicity & Social Media',
    lead: { name: 'Ashrith', image: '/assets/Leads/Ashrith.jpeg', linkedin: 'https://www.linkedin.com/in/ashrithyathin/', github: 'https://github.com/Ashrith-Yathin' },
    quote: 'Your vibe attracts your tribe.',
    members: [
      { name: 'Karthikeyan R S', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'I V S Akhil', image: '/assets/Teamsimg/akhil.png', linkedin: 'https://www.linkedin.com/in/akhil-ivs-29a116313/', github: 'https://github.com/akhilivs' },
      { name: 'Sai akshay Potnuru', image: '/assets/Teamsimg/akshay.png', linkedin: '#', github: '#' },
      { name: 'Pranjal Chouhan', image: '/assets/Teamsimg/pranjal.png', linkedin: '#', github: '#' },
      { name: 'Ayush Jain', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Shreya Senthilkumar', image: '/assets/Teamsimg/noprofile.png', linkedin: 'https://www.linkedin.com/in/shreya-senthilkumar-a2b09b376', github: 'https://github.com/shreya0718' },
      { name: 'Veda Pragna chimakurthi', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Praneeth Bollu', image: '/assets/Teamsimg/praneeth.png', linkedin: 'https://www.linkedin.com/in/praneeth-bollu-446a93343', github: '#' }
    ]
  },
  {
    name: 'Content & Social Outreach',
    lead: { name: 'Asmit', image: '/assets/Leads/Asmit.jpeg', linkedin: 'https://in.linkedin.com/in/asmitkum', github: '#' },
    quote: 'Voices that echo ideas.',
    members: [
      { name: 'Ch.Pallavi', image: '/assets/Teamsimg/pallavi.png', linkedin: '#', github: '#' },
      { name: 'B.NIHANTH', image: '/assets/Teamsimg/noprofile.png', linkedin: 'https://www.linkedin.com/in/boge-nihanth-102879340', github: '#' },
      { name: 'Dharra R', image: '/assets/Teamsimg/dhara.png', linkedin: 'https://www.linkedin.com/in/dhara-r-36b53936a/', github: '#' },
      { name: 'Bhavana sri', image: '/assets/Teamsimg/bhavana.png', linkedin: '#', github: '#' },
      { name: 'R DHARMENDRA', image: '/assets/Teamsimg/dharmendra.png', linkedin: 'https://www.linkedin.com/in/dharmendra-r-7319b2256/', github: '#' },
      { name: 'Suranjana Mary', image: '/assets/Teamsimg/mary.png', linkedin: 'https://www.linkedin.com/in/suranjanamary', github: '#' },
      { name: 'Priyadarshan N', image: '/assets/Teamsimg/nagarajan.png', linkedin: 'https://www.linkedin.com/in/priyadharsan-nagarajan-500411322', github: 'https://github.com/PriyanIiitian' },
      { name: 'K.Nihaal Sekhar', image: '/assets/Teamsimg/nihaal.png', linkedin: '#', github: '#' }
    ]
  },
  {
    name: 'Startup Innovation',
    lead: { name: 'Vishal', image: '/assets/Leads/Vishal.jpeg', linkedin: 'https://www.linkedin.com/in/vishal-singh-800421323/', github: '#' },
    quote: 'Dream. Dare. Do.',
    members: [
      { name: 'Raghul Vishwa S', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Sreevathsan V', image: '/assets/Teamsimg/sreevathsan.png', linkedin: '#', github: '#' },
      { name: 'ayyas vishnu', image: '/assets/Teamsimg/vishnu.png', linkedin: '#', github: '#' },
      { name: 'Ayush Gupta', image: '/assets/Teamsimg/noprofile.png', linkedin: 'https://www.linkedin.com/in/ayush-gupta-2b757a361', github: 'https://github.com/imayushfr' },
      { name: 'Vinay sharma', image: '/assets/Teamsimg/noprofile.png', linkedin: '#', github: '#' },
      { name: 'Vivek Dhotre', image: '/assets/Teamsimg/vivek.png', linkedin: 'https://www.linkedin.com/in/vivek-dhotre-642a2a324', github: '#' },
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