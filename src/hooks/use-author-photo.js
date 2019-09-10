// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { file } = useStaticQuery(
    graphql`
      query AuthorPhoto {
        file(relativePath: { eq: "profile-photo.png" }) {
          childImageSharp {
            fixed(width: 75, height: 75, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  );

  return file;
};

export default useSiteMetadata;
