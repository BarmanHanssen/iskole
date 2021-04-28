import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Administrativt</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        • Planlegging av nytt skoleår 
        Oppsett av fag og klasser med utgangspunkt i forrige skoleårs oppstilling 
        Opptak av elever 
        Time- og fagfordeling med beregning av stillingsstørrelser for lærere 
        Timeplanlegging 
        Eksamensgjennomføring
        Kontroll og utskrift av vitnemål og kompetansebevis 
        Overføring av data til Nasjonal Vitnemålsdatabase, VIGO, WIS og andre 
        Utlån av PCer 
        Internat 
      </>
    ),
  },
  {
    title: <>For lærere</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Fraværsføring for egne elever basert på timeplanen 
        Prøver i fag 
        Ukeplaner 
        Elevsamtaler 
        Vurderinger i fag 
        Meldingstjeneste 
      </>
    ),
  },
  {
    title: <>For elever</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>For foreldre</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/oversikt')}>
              Gå til dokumentasjonen
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
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
