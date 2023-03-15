import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/tasks.module.scss'
import React, { useState } from 'react';
import Popup from '../modals';
import { supabase } from '../../lib/supabaseClient';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'


export async function getServerSideProps() {
  let { data } = await supabase.from('tasks').select()

  return {
    props: {
      tasks: data
    },
  }
}

const Tasks = ({ tasks }) => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  console.log(user);

  const router = useRouter();

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    router.push('/');
  };

  const handleOpenPopup = (taskId) => {
    setCurrentTaskId(taskId);
  };

  const handleClosePopup = () => {
    setCurrentTaskId(null);
    Popup.isOpen=false;
  };

  const handleCompleteTask = () => {
    Popup.isOpen=false;
  };

  return (
    <div>
      <div>
        <button className="button block" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <h1 className={styles.header}>Pick a task</h1>
      {/* {console.log(tasks)} */}
      {tasks.map((task) => (
        <div key={task.id}>
          <button className={styles.taskBtn} onClick={() => handleOpenPopup(task.id)}>{task.taskname}</button>
          <Popup isOpen={currentTaskId === task.id} onClose={handleClosePopup}>
            <h3>Why this makes a difference</h3>
            <p className={styles.text}>{task.description}</p>
            <h3>How to complete task</h3>
            <p className={styles.text}>{task.howto}</p>
            <h3>Share your achievement</h3>
            <p className={styles.text}>Something about sharing and mention of the photo option</p>
            <button className={styles.closeBtn} onClick={handleClosePopup}>Back</button>
            <button className={styles.closeBtn} onClick={handleCompleteTask}>Completed Task</button>
          </Popup>
        </div>
      ))}
    </div>
  );
};

export default Tasks;




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