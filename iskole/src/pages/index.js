import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const features = [
  {
    title: 'Administrativt',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <ul>
        <li>Planlegging av nytt skoleår</li>
        <li>Oppsett av fag og klasser med utgangspunkt i forrige skoleårs oppstilling</li>
        <li>Opptak av elever</li>
        <li>Time- og fagfordeling med beregning av stillingsstørrelser for lærere</li>
        <li>Timeplanlegging</li>
        <li>Eksamensgjennomføring</li>
        <li>Kontroll og utskrift av vitnemål og kompetansebevis </li>
        <li>Overføring av data til Nasjonal Vitnemålsdatabase, VIGO, WIS og andre</li>
        <li>Utlån av PCer</li>
        <li>Internat</li>
      </ul>
    ),
  },
  {
    title: 'For lærere',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <ul>
        <li>Fraværsføring for egne elever basert på timeplanen</li>
        <li>Prøver i fag</li>
        <li>Ukeplaner</li>
        <li>Elevsamtaler</li>
        <li>Vurderinger i fag</li>
        <li>Meldingstjeneste</li>
      </ul>
    ),
  },
  {
    title: 'For elever og foreldre',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <ul>
        <li>Prøveresultater</li>
        <li>Meldingstjeneste</li>
        <li>Timeplan med ukeplan og prøveoversikt</li>
        <li>Fraværsoversikt</li>
        <li>Oppmelding til eksamen</li>
        <li>Valg av programfag for neste skoleår</li>
      </ul>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imageUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imageUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Dokumentasjon - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="docs/oversikt">
              Gå til dokumentasjonen
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
