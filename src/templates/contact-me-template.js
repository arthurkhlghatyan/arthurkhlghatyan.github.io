// @flow strict
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const ContactMeTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  console.log(name, email, message);

  return (
    <Layout title={`Contact Me - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact Me">
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
        <textarea value={message} onChange={({ target }) => setMessage(target.value)} />
        <button>Submit Message</button>
      </Page>
    </Layout>
  );
};

export default ContactMeTemplate;
