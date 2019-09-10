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
        <p>
          Hello, my name is Arthur. I'm a Web Application Developer.
        </p>
        <p>
          During my career, I mostly helped small businesses and startups to build their minimum valuable products
          and always did my best to build high quality technology which meets modern software development requirements.
        </p>
        <p>
          My number one goal is to work with a team of communicative and skilled people.
        </p>
        <p>
          From the large web application development toolset, I picked Node.js and React.Js technologies because of their simple and scalable nature.  
        </p>
        <p>
          My Core Skills are Node.js, MongoDB, React.js and Gatsby.
        </p>
      </Page>
    </Layout>
  );
};

export default AboutMeTemplate;
