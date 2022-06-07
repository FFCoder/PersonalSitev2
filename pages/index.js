import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <h2>Testing</h2>
      <p>test loreum ipsum </p>
      <footer className={styles.footer}>
       &copy; {year} Jonathon Chambers
      </footer>
    </div>
  )
}
