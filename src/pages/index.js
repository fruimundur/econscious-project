import { supabase } from './../lib/supabaseClient'
import Head from "next/head"
import Link from 'next/link'
import styles from '../styles/Start.module.scss'

export default function Start() {
  return (
    <div >
      <h1 className={styles.header}> Save the planet step-by-step </h1>
      <p className={styles.slogan}>Take small concrete steps to help combat climate change!</p>
      <Link className='start' href="/login">
        <button className={styles.startButton} type="start">Start</button>
      </Link>
    </div>
  );
}