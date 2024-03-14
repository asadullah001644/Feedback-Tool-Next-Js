"use client"
import Link from 'next/link';
import styles from './Home.module.css';

export default function HomeComp() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our Website</h1>
      <div className={styles.buttons}>
        <Link href="/login">
          <span className={styles.button}>Login</span>
        </Link>
        <Link href="/register">
          <span className={styles.button}>Register</span>
        </Link>
      </div>
    </div>
  );
}
