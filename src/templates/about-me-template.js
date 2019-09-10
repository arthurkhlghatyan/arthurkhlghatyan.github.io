// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const AboutMeTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`About Me - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="About Me">
        <p>Hello World</p>
      </Page>
    </Layout>
  );
};

export default AboutMeTemplate;
