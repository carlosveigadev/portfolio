import {
  Flex,
  Text,
  Image,
  Grid,
  Center,
  Link,
  Wrap,
  WrapItem,
  Avatar,
  Box,
} from '@chakra-ui/react';
import { FaGithubAlt } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
// import { useState } from 'react';
import cssLogo from '../assets/images/cssLogo.svg';
import htmlLogo from '../assets/images/htmlLogo.svg';
import gatheringsImg from '../assets/images/getherings.png';
import rubyOnRailsLogo from '../assets/images/rubyOnRailsLogo.svg';
import reduxLogo from '../assets/images/reduxLogo.svg';
import palibotImg from '../assets/images/palibot.png';
import letmeaskImg from '../assets/images/letmeask.png';
import javascriptLogo from '../assets/images/javascriptLogo.svg';
import clarasQuestImg from '../assets/images/clara_quest.jpeg';
import weatherImg from '../assets/images/weatherapp.jpeg';
import fmwImg from '../assets/images/find_my_wod.png';
import chatMessage from '../assets/images/chat-message.png';
import Navbar from './Navbar';
import style from '../assets/css/Projects.module.css';

const Projects = () => {
// const { isOpen, onOpen, onClose } = useDisclosure();
// const [icons, setIcons] = useState([htmlLogo, cssLogo]);
// const [background, setBackground] = useState(gatheringsImg);
  const projects = [
    {
      id: '0',
      title: 'Gatherings',
      liveLink: 'https://rawcdn.githack.com/wrakc/HTML-CSS-Capstone-Project/572a13c4445d57000b13ceae753b40a919cde4f8/index.html',
      githubLink: 'https://github.com/carlosveigadev/HTML-CSS-Capstone-Project.git',
      stacksNames: ['HTML', 'CSS'],
      logoLinks: [htmlLogo, cssLogo],
      background: gatheringsImg,
      text: 'In this HTML and CSS project, the main objective was to build reproduce the design of The Directory of Schools Webpage inspired by Mathew Njuguna and others on Behance, with a different theme. I chose to create a website named [gatherings] where people can meet in real life (after the COVID-19 situation) creating and sharing events across the region desired.',
      isDefault: true,
    },
    {
      id: '1',
      title: 'paliBOT',
      liveLink: 'https://polibot-web.herokuapp.com/',
      githubLink: 'https://github.com/carlosveigadev/palibot',
      stacksNames: ['Ruby', 'Ruby On Rails', 'TailwindCSS', 'Amazon S3', 'PostgreSQL'],
      logoLinks: ['https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg', rubyOnRailsLogo, 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg'],
      background: palibotImg,
      text: "This is a Ruby On Rails project developed at the end of the Microverse Main Technical Curriculum. It's a real-world-like project, built with business specifications to improve and test the achievement of technical and soft skills gained during this section of the program. The main objective was to reproduce the design of liFEsTlye. - Mobile version Webpage inspired by Nelson Sakwa on Behance on Behance, with a different theme. I chose to create a website named PoliBot (Filipino word for 'wanderer') where people can write articles about places they have visited on the continents of the earth.",
      isDefault: false,
    },
    {
      id: '2',
      title: 'Let Me Ask',
      liveLink: 'https://letmeask-6d92e.web.app/',
      githubLink: 'https://github.com/carlosveigadev/letmeask',
      stacksNames: ['React', 'Firebase'],
      logoLinks: ['https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'],
      background: letmeaskImg,
      text: "This is a website for streamers to create rooms where you are able to answer your audience's questions in real-time.",
      isDefault: false,
    },
    {
      id: '3',
      title: "Clara's Quest Game",
      liveLink: 'https://carlosveigadev.github.io/claras-quest/',
      githubLink: 'https://github.com/carlosveigadev/claras-quest',
      stacksNames: ['JavaScript', 'Phaser 3'],
      logoLinks: [javascriptLogo, 'https://www.vectorlogo.zone/logos/phaserio/phaserio-icon.svg'],
      background: clarasQuestImg,
      text: "This is a JavaScript and Phaser 3 library project developed at the end of the Microverse Main Technical Curriculum of the JavaScript section. It's a real-world-like project, built with business specifications to improve and test the achievement of technical and soft skills gained during this section of the program. The main objective was to design a game and implement it using the JavaScript Phaser 3 library.",
      isDefault: false,
    },
    {
      id: '4',
      title: 'Weather by GIFs',
      liveLink: 'https://carlosveigadev.github.io/weather-by-gifs/',
      githubLink: 'https://github.com/carlosveigadev/weather-by-gifs',
      stacksNames: ['JavaScript', 'Tailwind CSS'],
      logoLinks: [javascriptLogo, 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'],
      background: weatherImg,
      text: 'In this project, I used JavaScript to learn and practice fetching data from APIs, then I rendered a simple webpage that shows the weather of a city provided by the input of the user.',
      isDefault: false,
    },
    {
      id: '5',
      title: 'Find My Wod',
      liveLink: 'https://xenodochial-shockley-55c19b.netlify.app/',
      githubLink: 'https://github.com/carlosveigadev/find-my-wod-frontend',
      stacksNames: ['React&Redux', 'Chakra', 'JWT', 'Ruby on Rails'],
      logoLinks: ['https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', reduxLogo, rubyOnRailsLogo],
      background: fmwImg,
      text: 'In this project, I used Ruby on Rails for the back end and applied what I have learned with React and Redux to render a simple webpage that shows WODs and the user can favourite them.',
      isDefault: false,
    },
    {
      id: '6',
      title: 'Chat Message',
      liveLink: '',
      githubLink: 'https://github.com/carlosveigadev/chat-message',
      stacksNames: ['TypeScript', 'Express', 'Node', 'SQLite3', 'Socket.io'],
      logoLinks: ['https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg', 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg', 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg', 'https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg'],
      background: chatMessage,
      text: 'This project was done in the NWL-5 event, where I could improve my skills using TypeScript, Node and Websocket. Here is developed a chat system where a user sends a message and then an admin or helper can chat with the user to help him with his issue.',
      isDefault: false,
    },
  ];

  // const [showProject, setShowProject] = useState(projects[0]);
  // const [activeButtonId, setActiveButtonId] = useState('0');

  // const handleClick = (e) => {
  //   const index = e.target.id;
  //   setShowProject(projects[index]);
  //   setActiveButtonId(index);
  //   setIcons(projects[index].logoLinks);
  //   setBackground(projects[index].background);
  // };

  return (
    <>
      <Box>
        <Grid
          className={style.grid}
          p="2em"
          h="200px"
          templateColumns="repeat(1, 1fr)"
          gap={4}
        >
          {projects.map((element) => (
            <Flex key={element.id}>
              <Center key={`element ${element.id}`}>
                <Image
                  borderRadius="8px"
                  m="0.5em"
                  minWidth="500px"
                  src={element.background}
                  alt={`${element.title} image`}
                />
              </Center>
              <Center flexDirection="column">
                <Text
                  px="1em"
                  textAlign="justify"
                >
                  {element.text}

                </Text>
                <Wrap
                  className={style.stackNamesJustify}
                >
                  {element.stacksNames.map((stack, index) => (
                    <WrapItem
                      key={stack}
                      className={style.stackNames}
                    >
                      <Center pr="1em">
                        <Avatar mr="1em" size="xs" background="transparent" src={element.logoLinks[index]} />
                        {stack}
                      </Center>
                    </WrapItem>
                  ))}
                </Wrap>

                <Center>
                  <Link
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                    href={`${element.githubLink}`}
                    className={style.externalLinks}
                    alignItems="center"
                  >
                    <FaGithubAlt px="1em" />
                    GitHub
                  </Link>
                  {element.liveLink.trim() !== ''
                && (
                <Link
                  alignItems="center"
                  _hover={{ textDecoration: 'none' }}
                  isExternal
                  href={element.liveLink}
                  className={style.externalLinks}
                >
                  <HiOutlineDesktopComputer />
                  Live Demo
                </Link>
                )}
                </Center>
              </Center>
            </Flex>
          ))}
        </Grid>
        {/* <Flex h="450px">
          <Flex flexDirection="column" zIndex="dropdown">
            {projects.map((element) => (
              <button
                id={element.id}
                className={element.id === activeButtonId ? style.is_active : style.button}
                type="button"
                key={element.id}
                onClick={handleClick}
              >
                <span id={element.id} className={style.txtOverflow}>{element.title}</span>
              </button>
            ))}
          </Flex>

          <Image
            shadow="2xl"
            borderRadius="8px"
            position="absolute"
            right={{ sm: '0', md: '5em' }}
            height="100%"
            maxHeight="26em"
            src={background}
            alt="project background"
          />

          <button
            type="button"
            className={style.checkProjectButton}
            onClick={onOpen}
          >
            More Information
          </button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{showProject.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image src={background} />
                <Text
                  my="1em"
                  textAlign="justify"
                >
                  {showProject.text}

                </Text>
                <Wrap className={style.wrapper}>
                  {showProject.stacksNames.map((stack) => (
                    <WrapItem
                      key={stack}
                      className={style.stackNames}
                    >
                      <Center>{stack}</Center>
                    </WrapItem>
                  ))}
                </Wrap>
              </ModalBody>

              <ModalFooter display="flex" justifyContent="space-between">
                <Button
                  variant="ghost"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Link
                  isExternal
                  href={`${showProject.githubLink}`}
                  className={style.modalLink}
                >
                  <FaGithubAlt />
                  GitHub
                </Link>
                {showProject.liveLink.trim() !== ''
                && (
                <Link
                  isExternal
                  href={showProject.liveLink}
                  className={style.modalLink}
                >
                  <HiOutlineDesktopComputer />
                  Live Demo
                </Link>
                )}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex> */}
      </Box>
      <Navbar />
    </>
  );
};

// const Icons = ({ icons }) => (
//   icons.map((element) => (
//     <WrapItem key={element}>
//       <Avatar bg="#77A6F7" p="3px" className={style.blur} src={element} boxShadow="lg" />
//     </WrapItem>
//   ))
// );

export default Projects;
