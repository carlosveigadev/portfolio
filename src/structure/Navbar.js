/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import PropTypes from 'prop-types';
import {
  Box, Link, Text, Stack, Flex,
} from '@chakra-ui/react';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen }) => (
  <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </Box>
);

const CloseIcon = () => (
  <>
    <title>Menu</title>
    <IoMdClose />
  </>
);

const MenuIcon = () => (
  <>
    <title>Close</title>
    <AiOutlineMenu />
  </>
);

const MenuItem = ({
  children, to = '/', ...rest
}) => (
  <Link href={to}>
    <Text display="block" {...rest}>
      {children}
    </Text>
  </Link>
);

const MenuLinks = ({ isOpen }) => (
  <Box
    display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    flexBasis={{ base: '100%', md: 'auto' }}
  >
    <Stack>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about-me">About Me</MenuItem>
      <MenuItem to="/projects">Projects</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </Stack>
  </Box>
);

const NavbarContainer = ({ children, ...props }) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg={['black', 'black', 'transparent', 'transparent']}
    color={['red', 'red', 'blue', 'blue']}
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
