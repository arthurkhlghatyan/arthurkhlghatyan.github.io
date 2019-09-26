// @flow strict
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
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
          Hello, my name is Arthur! I'm a... ,
          check out my bio under my lovely picture :).
        </p>
        <p>
          Since you are already seeing the big picture of who am I, I'm going to tell you when it's all started, what I did previously, how I'm making things happen now.
        </p>
        <p>
          Well, I'm a self thought programmer, mostly... I discovered the world of programming at <a target="_blank" href="https://tumo.org/">TUMO</a> when I was 14 years old.
          I've learnt and did a lots of experimentations with HTML and JavaScript and through the time started to like web development.
          Shortly, it became my passion.
        </p>
        <p>
          As you may know every(almost) skilled human is in search for a job and I'm not an exception as well.
          I joined <a href="https://www.inexxus.com/">iNexxus</a> at 2015 as a software engineer and worked on companies internal software which meant to improve their marketing and project management processes.
        </p>
        <p>
          And here comes the most interesting part!
        </p>
        <p>
          I guess you've already noticed the short paragraph (under my lovely picture :)) stating that I'm a "Digital nomad".
          According to <a href="https://en.wikipedia.org/wiki/Digital_nomad">Wikipedia</a>&nbsp;
          Digital nomads are a type of people who use telecommunications technologies to earn a living and, more generally, conduct their life in a nomadic manner.
          Such workers often work remotely from foreign countries, coffee shops, public libraries, co-working spaces, or recreational vehicles.
        </p>
        <p>
          Though <a target="_blank" href="https://en.wikipedia.org/wiki/Recreational_vehicle">recreational vehicles</a> aren't my thing, but the definition is mostly about me.

          After a year and half I started to work as a freelancer.
          I discovered that the freedom to manage my schedule and the projects I'm going to work on came with key benefits, which are - improved decision making ability, productivity and more free time to spend on hobbies.
        </p>
        <p>
          Of course this kind of lifestyle also has some serious disatvantages (I'm going to cover them in future blog post and also going to share my experience and knowledge about remote work. So stay tuned!) but I managed to find solutions for those.
        </p>

        <p>
          Already, over 3 years I worked on different projects, built MVPs and learned the technologies I was excited about and also contributed to some accomplished projects.
          (I'll get a bit lazy here and ask you to check my <a target="_blank" href="https://www.linkedin.com/in/arthurkhlghatyan">LinkedIn</a> to see my experience in detail)
          Not to mention that published a piece of <a target="_blank" href="https://github.com/arthurkhlghatyan">open source</a>.
        </p>

        <p>
          Now let's talk about some technologies I'm really excited about.
        </p>

        <h4>
          <a target="_blank" href="https://www.gatsbyjs.org/">
          Gatsby
          </a>
        </h4>
        The first thing that comes to my head when I talk about Gatsby is the <a href="https://jamstack.org/">JAMStack</a>.
        Everything there is the JavaScript APIs and the markup. No reliance to the back-end language, server-side generated pages.
        Besides that it is based on React and I also like image optimization library that comes by default, the usage of GraphQL to query APIs and the mobile-first approach.

        <h4>
          <a href="https://www.gatsbyjs.org/">
          GraphQL
          </a>
        </h4>
        Everyone who ever used GraphQL will confirm how clean and well-documented is the API interface compared to traditional REST approach.
        Besides the ability to aggregate multiple resource in a single request and easy to use developer tool make GraphQL modern and powerful tool to build great APIs.

        <p>
          You may ask yourself - Is this guy the type of programmers who code 24/7 - (the time spend on sleeping + eating)? The answer is no. 
        </p>

        <p>
          So far this is it. Interested? Let's get in <Link to="/contact-me">touch.</Link>
        </p>

      </Page>
    </Layout>
  );
};

export default AboutMeTemplate;
