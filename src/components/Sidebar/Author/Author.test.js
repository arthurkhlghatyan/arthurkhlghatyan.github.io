// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Author from './Author';

describe('Author', () => {
  const props = {
    author: {
      name: 'test',
      bio: ['test']
    },
    isIndex: false,
    photo: {
      childImageSharp: {
        fixed: {
          src: 'profile-photo.png',
          srcSet: 'profile-photo.png'
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Author {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
