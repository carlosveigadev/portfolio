import {
  Button,
  Center, Input, Text, Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from './Navbar';
import style from '../assets/css/Contact.module.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    if (event.target.id === 'name') {
      setName(event.target.value);
    } else if (event.target.id === 'email') {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  return (
    <>
      <Center className={style.contact}>
        <Text>
          I am always interested in hearing about new projects,
          so if you want to chat please get in touch.
        </Text>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5FoMLAiDBSxSIDB38_yWngS5-K2zk7G5GNnMbmO60O5xocw/formResponse" method="post" target="hidden_iframe">
          <Input type="text" name="entry.2005620554" required placeholder="Full Name" id="name" value={name} onChange={handleChange} />
          <Input type="email" name="entry.1045781291" required placeholder="Email Address" id="email" value={email} onChange={handleChange} />
          <Textarea name="entry.839337160" required placeholder="Enter Text Here" value={message} onChange={handleChange} />
          <Button type="submit">Get In Touch</Button>
        </form>
      </Center>
      <Navbar />
    </>
  );
};

export default Contact;
