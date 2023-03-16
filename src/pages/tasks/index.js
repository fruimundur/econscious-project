import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/tasks.module.scss'
import React, { useState, useEffect } from 'react';
import Popup from '../modals';
import { supabase } from '../../lib/supabaseClient';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import logo from '../../../public/logo.png';
import Image from 'next/image';


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
  const [completedTasks, setCompletedTasks] = useState([]);
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
    Popup.isOpen = false;
  };

  const handleOuterClose = () => {
    if (Popup.isOpen = false) {
      setCurrentTaskId(null);
      Popup.isOpen = false;
    }

  };

  const handleCompleteTask = async () => {
    // Check if the user is logged in
    if (user) {
      try {
        const { data, error } = await supabase.from('usertasks').insert([
          {
            user_id: user.id,
            task_id: currentTaskId,
            completed: true,
            comment: '', // Add any comment if required
            photo: '', // Add photo URL if required
          },
        ]);

        if (error) {
          console.error('Error completing task:', error);
        } else {
          console.log('Task completed successfully:', data);
          setCompletedTasks([...completedTasks, currentTaskId]);
          handleClosePopup();
        }
      } catch (error) {
        console.error('Error completing task:', error);
      }
    } else {
      console.error('User not logged in');
    }
  };

  const fetchCompletedTasks = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('usertasks')
      .select('task_id')
      .eq('user_id', user.id)
      .eq('completed', true);

    if (error) {
      console.error('Error fetching completed tasks:', error);
    } else {
      const taskIds = data.map(task => task.task_id);
      setCompletedTasks(taskIds);
    }
  };

  useEffect(() => {
    fetchCompletedTasks();
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Image
          className={styles.logo}
          src={logo}
          alt="Brand logo"
        />
        <button className={styles.signOutBtn} onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <h1 className={styles.header}>Pick a task</h1>
      {/* {console.log(tasks)} */}
      {tasks.map((task) => (
        <div className={styles.taskcontainer} key={task.id}>
          <button className={`${styles.taskBtn} ${completedTasks.includes(task.id) ? styles.completedTask : ''}`}onClick={() => handleOpenPopup(task.id)}>{task.taskname}</button>
          <Popup isOpen={currentTaskId === task.id} onClose={handleClosePopup}>
            <h3 className={styles.title}>Why this makes a difference</h3>
            <p className={styles.text}>{task.description}</p>
            <h3 className={styles.title}>How to complete task</h3>
            <p className={styles.text}>{task.howto}</p>
            <h3 className={styles.title}>Share your achievement</h3>
            <p className={styles.text}>Something about sharing and mention of the photo option</p>
            <div className={styles.btnStyle}>
              <button className={styles.backBtn} onClick={handleClosePopup}>Back</button>
              <button className={styles.completedBtn} onClick={handleCompleteTask}>Complete Task</button>
            </div>
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