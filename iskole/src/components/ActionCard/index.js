import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function ActionCard({title, description, icon, to}) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <span className={styles.arrow}>&#8250;</span>
    </Link>
  );
}
