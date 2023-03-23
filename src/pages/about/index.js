import { useRouter } from 'next/router';
import styles from '../../styles/about.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';
import infopage from '../../../public/infopage.png';

export default function About() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
      <Image
              className={styles.logo}
              src={logo}
              alt="Brand logo"
            />  
      </div>           
        <Image
              className={styles.infoPhoto}
              src={infopage}
              alt="The Earth"
            />  
      <div className={styles.textContainer}>   
        <h1 className={styles.header}>How does it work?</h1>
        <p className={styles.moreInfo}>
          On your homepage you are presented with 10 random tasks. Each of these tasks include instructions on how to complete them, and they can all be completed in a short amount of time.        
        </p>
        <p className={styles.moreInfo}>
          Each task contributes to combating climate change.         
        </p>
        <p className={styles.moreInfo}>
        After you have completed a task you have the option of sharing your achievement on social media so you can encourage other people to do the same.
        </p>
      </div>
        <div className={styles.buttonStyle}>
          <Link className='start' href="/tasks">
            <button className={styles.gotItBtn} type="start">Got it</button>
          </Link> 
        </div>   
    </div>
  );
}
