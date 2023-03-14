import { useRouter } from 'next/router';
import styles from '../../styles/about.module.scss'


export default function About() {
const router = useRouter();

  return (
    <div>
      <h1 className={styles.header}>How does it work?</h1>
      <p className={styles.moreInfo}>
        On your homepage you are presented with 10 random tasks. Each of these tasks include instructions on how to complete them, and they can all be completed in a short amount of time. Each task contributes to combating climate change. After you have completed a task you have the option of sharing your achievement on social media so you can encourage other people to do the same.
      </p> 
    </div>
  );
}