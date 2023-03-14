import React from 'react';
import styles from '../../styles/tasks.module.scss'
import { supabase } from '../../lib/supabaseClient';
 
const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
 
  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        {children}
        <button className={styles.closeBtn} onClick={onClose}>Back</button>
        <button className={styles.closeBtn} onClick={onClose}>Completed Task</button>
      </div>
    </div>
  );
};
 
export default Popup;