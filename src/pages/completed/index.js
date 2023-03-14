import { useRouter } from 'next/router';
import styles from '../../styles/completed.module.scss'
import Image from 'next/image'
import placeholder from '../../../public/placeholder.jpg';
import { FacebookMessengerShareButton, FacebookMessengerIcon } from 'next-share';


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
        <div className={styles.buttonContainer}>
          <button className={styles.buttons}>Add photo</button>
          <button className={styles.buttons}>Share</button>
        </div>
        <FacebookMessengerShareButton
          url={'http://localhost:3000/'} >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
      </>
    );
  }