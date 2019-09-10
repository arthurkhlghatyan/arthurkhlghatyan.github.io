// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const ContactMeTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Contact Me - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact Me">
        <p>Hello World</p>
      </Page>
    </Layout>
  );
};

export default ContactMeTemplate;
