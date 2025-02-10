import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { useHistory } from '@docusaurus/router';

import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();
  return (
    <header className={clsx('hero polka-dot', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.hero_title} >{siteConfig.title}</h1>
        <p className={styles.hero_subtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={'Documentation for Juice Data Science Products'}
      description="Documentation for Juice Data Science Products">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
