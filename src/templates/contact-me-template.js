// @flow strict
import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import { isEmpty, isEmail } from '../utils/validators';

const ContactMeTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  // Input fields: name, e-mail, message
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ errors, setErrors ] = useState([]);

  // Creates params object to hold items in one container
  const params = {
    name,
    email,
    message,
  };

  const isValid = {
    name: (value) => !isEmpty(value),
    email: (value) => !isEmpty(value) && isEmail(value),
    message: (value) => !isEmpty(value),
  };

  const validate = () => {
    const items = ['name', 'email', 'message'];

    for (let i = 0; i < items.length; i += 1) {
      const itemName = items[i];

      if (!isValid[itemName](params[itemName])) {
        setErrors(...errors, itemName);
      }
    }
  };

  const sendMessage = async () => {
    // Init emailjs.com SDK
    init('user_vsPR1TroUrLfTA9TiGFcw');






    // try {
      // Send e-mail
      // await send('gmail', 'personal_blog', params);
    // } catch (error) {
      // console.log(error);
    // }
  };

  return (
    <Layout title={`Contact Me - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact Me">
        <input
          placeholder="John Doe"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          placeholder="foo@bar.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <textarea
          placeholder="Hi Arthur! Let's get in touch."
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <button onClick={sendMessage}>Send Message</button>
      </Page>
    </Layout>
  );
};

export default ContactMeTemplate;
