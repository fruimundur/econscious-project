import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/tasks.module.scss'
import React, { useState } from 'react';
import Popup from '../modals';
import { supabase } from '../../lib/supabaseClient';


export async function getServerSideProps() {
  let { data } = await supabase.from('tasks').select()

  return {
    props: {
     tasks: data
    },
  }
}

const MyComponent = ({tasks}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
 
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
 
  return (
    <div>
      <h1 className={styles.header}>Pick a task</h1>
      {console.log(tasks)}
      {tasks.map((task) => (
      <div key={task.id}>
        <button  className={styles.taskBtn} onClick={handleOpenPopup}>{task.taskname}</button>
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <p className={styles.text}>Text about your task is displayed here</p>
        </Popup>
      </div>
       ))}
    </div>
  );
};
 
export default MyComponent;




/*
export default function Login() {
const router = useRouter();

  return (
    <div>
      <h1 className={styles.header}> Pick a task </h1>
      <Link className='task' href="/about">
        <button className={styles.taskButton} type="task">name of task </button>
      </Link>
    </div>
  );
}
*/