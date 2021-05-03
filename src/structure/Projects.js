import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Wrap,
  WrapItem,
  Avatar,
} from '@chakra-ui/react';
import { useState } from 'react';
import cssLogo from '../assets/images/cssLogo.svg';
import htmlLogo from '../assets/images/htmlLogo.svg';
import gatheringsImg from '../assets/images/getherings.png';
import rubyOnRailsLogo from '../assets/images/rubyOnRailsLogo.svg';
import palibotImg from '../assets/images/palibot.png';
import officeWorkoutImg from '../assets/images/office_workout.png';
import javascriptLogo from '../assets/images/javascriptLogo.svg';
import clarasQuestImg from '../assets/images/clara_quest.jpeg';
import weatherImg from '../assets/images/weatherapp.jpeg';

import Navbar from './Navbar';

const Projects = () => {
  // const [project, setProject] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [icons, setIcons] = useState([htmlLogo, cssLogo]);

  const projects = [
    {
      title: 'Gatherings',
      liveLink: 'https://rawcdn.githack.com/wrakc/HTML-CSS-Capstone-Project/572a13c4445d57000b13ceae753b40a919cde4f8/index.html',
      githubLink: 'https://github.com/carlosveigadev/HTML-CSS-Capstone-Project.git',
      stacksNames: ['HTML', 'CSS'],
      logoLinks: [htmlLogo, cssLogo],
      background: gatheringsImg,
      text: 'In this HTML and CSS project, the main objective was to build reproduce the design of The Directory of Schools Webpage inspired by Mathew Njuguna and others on Behance, with a different theme. I chose to create a website named [gatherings] where people can meet in real life (after the COVID-19 situation) creating and sharing events across the region desired.',
    },
    {
      title: 'paliBOT',
      liveLink: 'https://polibot-web.herokuapp.com/',
      githubLink: 'https://github.com/carlosveigadev/palibot',
      stacksNames: ['Ruby', 'Ruby On Rails', 'TailwindCSS', 'Amazon S3', 'PostgreSQL'],
      logoLinks: ['https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg', rubyOnRailsLogo, 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg'],
      background: palibotImg,
      text: "This is a Ruby On Rails project developed at the end of the Microverse Main Technical Curriculum. It's a real-world-like project, built with business specifications to improve and test the achievement of technical and soft skills gained during this section of the program. The main objective was to reproduce the design of liFEsTlye. - Mobile version Webpage inspired by Nelson Sakwa on Behance on Behance, with a different theme. I chose to create a website named PoliBot (Filipino word for 'wanderer') where people can write articles about places they have visited on the continents of the earth.",
    },
    {
      title: '10 Minutes Office Workout',
      liveLink: '',
      githubLink: 'https://github.com/carlosveigadev/slack-10-min-office-workout',
      stacksNames: ['Ruby', 'Slack-Ruby-Bot'],
      logoLinks: ['https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg', 'https://www.vectorlogo.zone/logos/slack/slack-icon.svg'],
      background: officeWorkoutImg,
      text: 'This bot was created as part of the Capstone project, which is a solo project at the end of each of the Microverse Main Technical Curriculum sections. This slack bot was built with Ruby, to randomly provide the user with a YouTube video to a 10 minutes workout in-home office.',
    },
    {
      title: "Clara's Quest Game",
      liveLink: 'https://carlosveigadev.github.io/claras-quest/',
      githubLink: 'https://github.com/carlosveigadev/claras-quest',
      stacksNames: ['JavaScript', 'Phaser 3'],
      logoLinks: [javascriptLogo, 'https://www.vectorlogo.zone/logos/phaserio/phaserio-icon.svg'],
      background: clarasQuestImg,
      text: "This is a JavaScript and Phaser 3 library project developed at the end of the Microverse Main Technical Curriculum of the JavaScript section. It's a real-world-like project, built with business specifications to improve and test the achievement of technical and soft skills gained during this section of the program. The main objective was to design a game and implement it using the JavaScript Phaser 3 library.",
    },
    {
      title: 'Weather by GIFs',
      liveLink: 'https://carlosveigadev.github.io/weather-by-gifs/',
      githubLink: 'https://github.com/carlosveigadev/weather-by-gifs',
      stacksNames: ['JavaScript', 'Tailwind CSS'],
      logoLinks: [javascriptLogo, 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'],
      background: weatherImg,
      text: 'In this project, I used JavaScript to learn and practice fetching data from APIs, then I rendered a simple webpage that shows the weather of a city provided by the input of the user.',
    },
  ];

  const handleClick = (e) => {
    setIcons(projects[e.id].logoLinks);
  };

  return (
    <>
      <Wrap m="1.5em">
        <Icons icons={icons} />
      </Wrap>
      <Box bgColor="blue">
        <Flex flexDirection="column">
          <ButtonProject handleClick={handleClick} buttons={projects} />
        </Flex>
        <Button onClick={onOpen}>Check Project</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>This is a text</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Navbar />
    </>
  );
};

const Icons = ({ icons }) => (
  icons.map((element) => (
    <WrapItem key={element}>
      <Avatar bg="transparent" src={element} />
    </WrapItem>
  ))
);

const ButtonProject = ({ buttons, handleClick }) => (
  buttons.map((element) => (
    <>
      <Button onClick={handleClick} key="buttons">{element.title}</Button>
    </>
  ))
);

export default Projects;
