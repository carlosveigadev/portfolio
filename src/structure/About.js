import { Flex, Text, Button } from '@chakra-ui/react';
import Navbar from './Navbar';
import style from '../assets/css/About.module.css';

const About = () => (
  <>
    <Flex className={style.about}>
      <Text>
        Turning all my efforts into improving my
        problem-solving skills and creativeness
        on software and web development, and data analysis.
      </Text>
      <Button>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1gjztB6ql6_pvgPAUNiner61mTAu68g8QLrvKbTsCAbY/edit?usp=sharing"
        >
          Get My Resume
        </a>
      </Button>
    </Flex>
    <Navbar />
  </>
);

export default About;
