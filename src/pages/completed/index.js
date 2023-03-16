import { useRouter } from 'next/router';
import styles from '../../styles/completed.module.scss'
import Image from 'next/image'
import thankyou from '../../../public/thankyou.png';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'next-share';
import nextConnect from 'next-connect';
import { supabase } from '../../lib/supabaseClient';

export async function getServerSideProps(context) {
  const taskId = context.query.taskId;

  let { data: task } = await supabase.from('tasks').select().eq('id', taskId).single();

  return {
    props: {
      task
    },
  }
}


export default function Completed({ task }) {
  const router = useRouter();

  const handleBack = async () => {
    router.push('/tasks');
  };

  return (
    <>
      <button className={styles.signOutBtn} onClick={handleBack}>
        Back
      </button>
      <Image
        className={styles.img}
        src={thankyou}
        alt="Placeholder image"
      />
      <h1 className={styles.header}>Task completed!</h1>
      <div className={styles.paragraphBox}>
        <p className={styles.paragraph}>{task.description}</p>
        <a className={styles.link} href="https://www.google.com/" target="_blank">Read more</a>
      </div>
      <button className={styles.photoButton}>Add photo</button>
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