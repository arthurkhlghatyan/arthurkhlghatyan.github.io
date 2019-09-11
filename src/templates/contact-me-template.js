// @flow strict
import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const ContactMeTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ error, setError ] = useState('');

  const submitMessage = async () => {
    init('user_vsPR1TroUrLfTA9TiGFcw');

    const params = {
      name,
      email,
      message,
    };

    try {
      await send('gmail', 'personal_blog', params);
    } catch (error) {
      setError('Error occurred while sending an email');
    }
  };

  return (
    <Layout title={`Contact Me - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact Me">
        { error === '' ? null : error }
        <input
          placeholder="Full Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          placeholder="E-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <button onClick={submitMessage}>Submit Message</button>
      </Page>
    </Layout>
  );
};

export default ContactMeTemplate;
