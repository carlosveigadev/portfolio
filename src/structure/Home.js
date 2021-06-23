import {
  Center, Text, Circle, Link,
} from '@chakra-ui/react';
import {
  FaGithubAlt, FaTwitter, FaLinkedinIn, FaAngellist,
} from 'react-icons/fa';
import Navbar from './Navbar';
import style from '../assets/css/Home.module.css';

const Home = () => (
  <>
    <Center className={style.homeText}>
      <Text>Hello there, I am Carlos Veiga.</Text>
      <Text>I am a Full Stack Web Developer.</Text>
      <Text>
        I can help you build a product, feature, or website. Look through some
        of my work and experience!
        If you like what you see and have a project you need coding,
        don&apos;t hesitate to contact me.
      </Text>
      <Center className={style.icons}>
        <Link
          href="https://github.com/carlosveigadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Circle><FaGithubAlt /></Circle>
        </Link>
        <Link
          href="https://twitter.com/carlosveigadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Circle><FaTwitter /></Circle>
        </Link>
        <Link
          href="https://www.linkedin.com/in/carlosveigadev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Circle><FaLinkedinIn /></Circle>
        </Link>
        <Link
          href="https://angel.co/u/carlosveiga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Circle><FaAngellist /></Circle>
        </Link>
      </Center>
    </Center>
    <Navbar />
  </>
);

export default Home;
