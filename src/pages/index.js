import { supabase } from './../lib/supabaseClient'
import Head from "next/head"
import Link from 'next/link'
import styles from '../styles/start.module.scss'
import tree from '../../public/tree.png';
import logo from '../../public/logo.png';
import Image from 'next/image';

export default function Start() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
        <Image
          className={styles.logo}
          src={logo}
          alt="Brand logo"
        /> 
      <h1 className={styles.header}> Save the planet step-by-step </h1>
      <p className={styles.slogan}>Take small concrete steps to<br></br>
      help combat climate change!</p>
      <Link className='start' href="/login">
        <button className={styles.startButton} type="start">Start</button>
      </Link>
      </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={tree}
          alt="Green tree"
        />
      </div>
    </div>
  );
}