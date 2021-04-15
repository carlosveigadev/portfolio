import {
  Button,
  Center, FormControl, Input, Text, Textarea,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import style from '../assets/css/Contact.module.css';

const Contact = () => (
  <>
    <Center className={style.contact}>
      <Text>
        I am always interested in hearing about new projects,
        so if you want to chat please get in touch.
      </Text>
      <FormControl>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email Address" />
        <Textarea placeholder="Enter Text Here" />
        <Button type="submit">Get In Touch</Button>
      </FormControl>
    </Center>
    <Navbar />
  </>
);

export default Contact;
