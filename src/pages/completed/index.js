import { useRouter } from 'next/router';
import styles from '../../styles/completed.module.scss'
import Image from 'next/image'
import thankyou from '../../../public/thankyou.png';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'next-share';
import nextConnect from 'next-connect';


export default function Completed() {
const router = useRouter();

    return (
      <>
          <Image
          className={styles.img}
          src={thankyou}
          alt="Placeholder image"
        />
        <h1 className={styles.header}>Task completed!</h1>
        <div className={styles.paragraphBox}>
          <p className={styles.paragraph}>Information about how exactly this is impacting climate change.</p>
          <a className={styles.link} href="https://www.google.com/" target="_blank">Read more</a>
        </div>
        <p className={styles.shareText}>Share your accomplishment</p>
        <div className={styles.buttonContainer}>
        <FacebookShareButton
          url={'https://www.google.com/'}>
          <FacebookIcon size={50} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={'https://www.google.com/'} >
          <TwitterIcon size={50} round />
        </TwitterShareButton>
        </div>
      </>
    );
  }