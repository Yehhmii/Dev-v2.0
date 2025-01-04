import iting1 from '../../images/ITing1.png';
import iting2 from '../../images/ITing2.png';
import iting3 from '../../images/stud1.png';
import iting4 from '../../images/stud2.png';
import iting5 from '../../images/stud3.png';
import iting6 from '../../images/stud4.png';
import iting7 from '../../images/stud5.png';
import iting8 from '../../images/stud6.png';
import iting9 from '../../images/sup1.png';
import iting10 from '../../images/sup2.png';
import iting11 from '../../images/sup3.png';
import iting12 from '../../images/sup4.png';
import music1 from '../../images/music1.png'
import music2 from '../../images/music2.png'
import music3 from '../../images/music3.png'
import flight1 from '../../images/flight1.png';
import flight2 from '../../images/flight2.png';
import flight3 from '../../images/flight3.png';
import flight4 from '../../images/flight4.png';
import flight5 from '../../images/flight5.png';
import flight6 from '../../images/flight6.png';
import py1 from '../../images/py1.png';
import py2 from '../../images/py2.png';
import game1 from '../../images/game1.png';
import game2 from '../../images/game2.png';

const projectData = [
    {
      id: 1,
      name: 'ITing',
      imgSrc: [iting1, iting2, iting3, iting4, iting5, iting6, iting7, iting8, iting9, iting10, iting11, iting12, ],
      description: "This project focused on developing an efficient, technology-driven solution for managing and monitoring industrial training experiences through a web-based platform: the Student Work Integrated Education System (SWIES).The SWIES system successfully bridges the gap between academic requirements and real-world application, enabling educational institutions to streamline the management of industrial training. The system’s features—location tracking, digital reporting, and a structured appraisal process—effectively address the main challenges identified in the initial problem statement. This project demonstrates that modern digital tools can significantly enhance the efficiency and accountability of industrial training programs.Recommendations for future development include implementing an offline mode, integrating data analysis tools to provide insights into student performance trends and identify areas for improvement, and offering customizable privacy settings that allow students more granular control over data sharing. Additionally, a recommendation engine could be developed to give students access to previous placement locations as potential options.",
    },
    {
      id: 2,
      name: 'LaraBuzz',
      imgSrc: [music1, music2, music3, ],
      description: "A feature-rich music application developed using the MERN stack. The application allows users to create playlists, search for songs, and stream music seamlessly. It integrates RESTful APIs for fetching and managing data and utilizes MongoDB for efficient storage and retrieval of user preferences. The responsive design ensures a consistent experience across devices.",
    },
    {
      id: 3,
      name: 'PlutoAirs',
      imgSrc: [flight1, flight2, flight3, flight4, flight5, flight6, ],
      description: "A robust Airline Reservation System designed using the MERN stack. This project enables users to search for flights, book tickets, and manage reservations effortlessly. With a focus on scalability and efficiency, the system features real-time data updates and a secure user authentication mechanism to enhance the booking experience.",
    },
    {
      id: 4,
      name: 'Python Challenge Game',
      imgSrc: [py1, py2],
      description: "A collection of engaging Python games showcasing the power of Python's libraries such as Pygame for creating immersive graphics and sound effects, and Tkinter for building user-friendly interfaces. These games include puzzles, interactive challenges, and arcade-style gameplay, highlighting the versatility and functionality of Python in game development.",
    },
    {
      id: 5,
      name: 'Anime Royal Rumble',
      imgSrc: [game1, game2],
      description: "An interactive browser-based game built entirely with JavaScript, HTML5, and CSS3. The game leverages the Canvas API for smooth animations and dynamic gameplay. Featuring engaging mechanics, responsive controls, and captivating visuals, this project showcases the potential of JavaScript in creating rich, user-friendly gaming experiences.",
    },
  ];
  
  export default projectData;
  