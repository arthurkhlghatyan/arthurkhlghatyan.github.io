// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className={styles['copyright']}>
    Powered by <a target="_blank" href="https://www.gatsbyjs.org/">Gatsby</a>.
  </div>
);

export default Copyright;
