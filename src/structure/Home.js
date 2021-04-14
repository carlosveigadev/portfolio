import { Center, Text, Circle } from '@chakra-ui/react';
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
        <Circle><FaGithubAlt /></Circle>
        <Circle><FaTwitter /></Circle>
        <Circle><FaLinkedinIn /></Circle>
        <Circle><FaAngellist /></Circle>
      </Center>
    </Center>
    <Navbar />
  </>
);

export default Home;
