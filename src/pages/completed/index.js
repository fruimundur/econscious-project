import { useRouter } from 'next/router';
import styles from '../../styles/completed.module.scss'
import Image from 'next/image'
import placeholder from '../../../public/placeholder.jpg';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'next-share';
import nextConnect from 'next-connect';


export default function Completed() {
const router = useRouter();

    return (
      <>
          <Image
          className={styles.img}
          src={placeholder}
          alt="Placeholder image"
        />
        <h1 className={styles.header}>Completed task</h1>
        <div className={styles.paragraphBox}>
          <p className={styles.paragraph}>Information about how exactly this is impacting climate change.</p>
          <a className={styles.link} href="https://www.google.com/" target="_blank">Read more</a>
        </div>
        <button className={styles.photoButton}>Add photo</button>
        <div className={styles.buttonContainer}>
        <FacebookShareButton
          url={'https://www.google.com/'}>
          <FacebookIcon size={90} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={'https://www.google.com/'} >
          <TwitterIcon size={90} round />
        </TwitterShareButton>
        </div>
      </>
    );
  }