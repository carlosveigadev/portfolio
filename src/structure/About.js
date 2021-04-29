import {
  Flex, Text, Button, Wrap, WrapItem, Image, Box,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import style from '../assets/css/About.module.css';
import computerLogo from '../assets/images/computerLogo.svg';
import frameworkLogo from '../assets/images/frameworkLogo.svg';
import softSkillLogo from '../assets/images/softSkills.svg';

const About = () => {
  const items = {
    box1: {
      imageUrl: computerLogo,
      name: 'Languages',
      skills: ['Javascript', 'Ruby', 'HTML', 'CSS'],
    },
    box2: {
      imageUrl: frameworkLogo,
      name: 'Frameworks',
      skills: ['Bootstrap', 'Tailwind', 'Ruby on Rails', 'RSPec', 'Capybara', 'React & Redux'],
    },
    box3: {
      imageUrl: softSkillLogo,
      name: 'Skills',
      skills: ['Git', 'Remote Work', 'Adaptability', 'Problem-solving', 'Conflict resolution'],
    },
  };

  return (
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
      <Box className={style.skillbox}>
        <SkillBox items={items.box1} />
        <SkillBox items={items.box2} />
        <SkillBox items={items.box3} />
      </Box>
      <Navbar />
    </>
  );
};

const SkillBox = (items) => {
  const { imageUrl, name, skills } = items.items;
  return (
    <Flex className={style.skillboxInside}>
      <Image name={name} src={imageUrl} width="4em" margin="1em" />
      <Text className={style.skillBoxTxt}>{name}</Text>
      <Wrap spacing="30px" justify="center" p="1em" className={style.firstBox}>
        {skills.map((item) => (
          <WrapItem className={style.itemWrap} key={item}>{item}</WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default About;
