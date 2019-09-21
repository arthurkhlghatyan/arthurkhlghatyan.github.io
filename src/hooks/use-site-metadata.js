// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              contacts {
                linkedin
                github
                angelist
                email
                telegram
                twitter
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
