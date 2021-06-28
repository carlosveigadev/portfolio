/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  Box, Text, Flex,
} from '@chakra-ui/react';
import style from '../assets/css/Navbar.module.css';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex>
      <NavbarContainer className={style.navContainer} {...props} zIndex="overlay">
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavbarContainer>
    </Flex>
  );
};

const MenuToggle = ({ toggle, isOpen }) => (
  <Box display={{ base: 'inline-flex', md: 'none' }} onClick={toggle}>
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </Box>
);

const CloseIcon = () => (
  <>
    <title>Menu</title>
    <IoMdClose className={style.closeIcon} />
  </>
);

const MenuIcon = () => (
  <>
    <title>Close</title>
    <AiOutlineMenu className={style.menuIcon} />
  </>
);

const MenuItem = ({
  children, to = '/', ...rest
}) => (
  <NavLink
    className={style.navbar}
    exact
    to={to}
    activeStyle={{
      color: '#FFFFFF',
      backgroundColor: '#00887A',
    }}
  >
    <Text display="inline" {...rest}>
      {children}
    </Text>
  </NavLink>
);

const MenuLinks = ({ isOpen }) => (
  <Box
    justifyContent="center"
    display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
    flexBasis={{ base: '100%', md: 'auto' }}
  >
    <Flex fontSize="30px" color="#2C2C2C" shadow="2xl" borderLeftRadius="50px" borderRightRadius="50px">
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about-me">About Me</MenuItem>
      <MenuItem to="/projects">Projects</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </Flex>
  </Box>
);

const NavbarContainer = ({ children, ...props }) => (
  <Flex
    display="inline-block"
    as="nav"
    wrap="wrap"
    w="100%"
    p={8}
    {...props}
  >
    {children}
  </Flex>
);

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

NavbarContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

MenuLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Navbar;
