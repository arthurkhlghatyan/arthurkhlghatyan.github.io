// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Author.module.scss';
import type { ImageSharp } from '../../../types';

type Props = {
  author: {
    name: string,
    bio: string,
  },
  isIndex: ?boolean,
  photo: ImageSharp,
};

const Author = ({ author, isIndex, photo }: Props) => (
  <div className={styles['author']}>
    <Link to="/">
      <Img className={styles['author__photo']} fixed={photo.childImageSharp.fixed} />
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
);

export default Author;
