import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.card}>
      <div class={styles.cardD}>
          <img src={'nature.jpg'} class={styles.cardImage}></img>
          <button class={styles.btncs}>Sign In!</button>
      </div>
          
          <div class={styles.inside}>
            <h2>Sada</h2>
            <p>Loreum epsumm paragraph!</p>
          </div>
          
      
    </div>
  );
}
