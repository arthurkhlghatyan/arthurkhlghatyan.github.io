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
        I'm a Javascript specialist, specialized in Web application development.

        During my career, I mostly helped small businesses and startups to build their minimum valuable products and always tried to build high quality, scalable and maintainable tech which meets modern software requirements.

        My number one goal is to work with a team of communicative and skilled people so I always expect to be in an organization which includes those values in its development culture.

        From the large web application development toolset, I picked Node.js and React.Js technologies because of their simple and scalable nature.

        My Core Skills are Node.js, MySQL/PostgreSQL, React.js, Mocha, Jest.
      </Page>
    </Layout>
  );
};

export default AboutMeTemplate;
