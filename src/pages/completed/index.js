import { useRouter } from 'next/router';
import styles from '../../styles/completed.module.scss';
import Image from 'next/image';
import thankyou from '../../../public/thankyou.png';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'next-share';
import nextConnect from 'next-connect';
import { supabase } from '../../lib/supabaseClient';
import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useUser } from '@supabase/auth-helpers-react';
import Header from '../components/Header';

export async function getServerSideProps(context) {
  const taskId = context.query.taskId;

  let { data: task } = await supabase.from('tasks').select().eq('id', taskId).single();

  return {
    props: {
      task,
    },
  };
}

export default function Completed({ task }) {
  const router = useRouter();
  const user = useUser();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const fetchCompletedTask = async () => {
    if (!user || !task) return;
    if (user) {
      const { data, error } = await supabase
        .from('usertasks')
        .select('photo')
        .eq('user_id', user.id)
        .eq('task_id', task.id);

      if (error) {
        console.error('Error fetching completed task:', error);
        return;
      }

      if (data && data.length > 0 && data[0].photo) {
        setUploadedImageUrl(data[0].photo);
      }
    }
  };



  useEffect(() => {
    fetchCompletedTask();
  }, [user, task]);

  useEffect(() => {
    if (uploadedImageUrl) {
      fetchCompletedTask();
    }
  }, [uploadedImageUrl]);

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length === 0 || !user || !task) return;

    const file = acceptedFiles[0];
    setUploadedImage(file);

    const uniqueFileName = `${Date.now()}-${file.name}`;
    const fileName = `tasks/${user.id}/${uniqueFileName}`;
    const { data, error } = await supabase.storage.from('tasks').upload(fileName, file);
    console.log('File uploaded:', data); // Add this line


    if (error) {
      console.error('Error uploading the image:', error);
      return;
    }

    const { data: photoUrlData, error: getUrlError } = await supabase.storage.from('tasks').getPublicUrl(fileName);
    console.log('Photo URL data:', photoUrlData); // Add this line
    const photoUrl = photoUrlData.publicUrl;



    if (getUrlError) {
      console.error('Error fetching the public URL:', getUrlError);
      return;
    }

    console.log('Photo URL:', photoUrl);

    // Update the usertask entry
    const { data: updatedTask, error: updateError } = await supabase
      .from('usertasks')
      .update({ photo: photoUrl })
      .eq('user_id', user.id)
      .eq('task_id', task.id);

    console.log('Updated usertask:', updatedTask);

    if (updateError) {
      console.error('Error updating the usertask:', updateUserTaskError);
      return;
    }

    setUploadedImageUrl(photoUrl);
    fetchCompletedTask(); // Add this line
  }, [user, task]);






  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleBack = async () => {
    router.push('/tasks');
  };

  return (
    <>
    <Header />
      {/*<button className={styles.signOutBtn} onClick={handleBack}>
        Back
      </button>*/}
      {uploadedImageUrl ? (
        <Image className={styles.uploadedImage} src={uploadedImageUrl} alt="Uploaded image" width={600} height={400} />
      ) : (
        <Image className={styles.img} src={thankyou} alt="Placeholder image" width={600} height={400} />
      )}
      <h1 className={styles.header}>Task completed!</h1>
      <div className={styles.paragraphBox}>
        <p className={styles.paragraph}>{task.description}</p>
        <a className={styles.link} href="https://www.google.com/" target="_blank">Read more</a>
      </div>
      <div {...getRootProps()} className={styles.photoButton}>
        <input {...getInputProps()} capture="environment" />
        {<p>Add photo</p>}
      </div>
      <p className={styles.shareText}>Share your accomplishment</p>
      <div className={styles.buttonContainer}>
        <FacebookShareButton
          url={'https://econscious-project.vercel.app'}
          title={'I took a step to combat climate change, and you can too!'}>
          <FacebookIcon size={50} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={'https://econscious-project.vercel.app'}
          title={'I took a step to combat climate change, and you can too!'} >
          <TwitterIcon size={50} round />
        </TwitterShareButton>
      </div>
    </>
  );
}
