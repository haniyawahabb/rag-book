import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import modules from '@site/src/data/modules.json';
import styles from './index.module.css';

const openChat = () => window.dispatchEvent(new Event('cw:open'));

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const {book} = siteConfig.customFields;

  return (
    <Layout title={book.bookTitle} description={book.tagline}>
      <header className={styles.hero}>
        <span className={`${styles.float} ${styles.f1}`} />
        <span className={`${styles.float} ${styles.f2}`} />
        <span className={`${styles.float} ${styles.f3}`} />
        <span className={`${styles.float} ${styles.f4}`} />
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.chip}>{book.edition}</span>
            <h1 className={styles.title}>{book.bookTitle}</h1>
            <p className={styles.sub}>{book.tagline}.</p>
            <div className={styles.actions}>
              <Link className={styles.btnPrimary} to="/docs/">
                Begin your journey
              </Link>
              <button type="button" className={styles.btnSoft} onClick={openChat}>
                Chat with the AI tutor
              </button>
            </div>
            <div className={styles.facts}>
              <span className={styles.fact}>9 modules</span>
              <span className={styles.fact}>41 weeks</span>
              <span className={styles.fact}>English + Roman Urdu</span>
              <span className={styles.fact}>Projects in every module</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <h2>Your learning path</h2>
              <p>Follow the modules in order, one step at a time.</p>
            </div>
            <div className={styles.timeline}>
              {modules.map((m) => (
                <Link key={m.n} to={m.path} className={styles.step}>
                  <div className={styles.bubble}>{String(m.n).padStart(2, '0')}</div>
                  <div className={styles.body}>
                    <h3>{m.title}</h3>
                    <p>{m.summary}</p>
                    <span className={styles.meta}>
                      {m.weeks} &middot; {m.weekCount} lessons
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className={styles.cta}>
            <h2>Ask anything, anytime</h2>
            <p>The AI tutor explains every topic with examples. Type in English or Roman Urdu, whichever feels easier.</p>
            <button type="button" className={styles.btnSoft} onClick={openChat}>
              Open the tutor
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
