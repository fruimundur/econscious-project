import React from 'react';
import styles from '../../styles/tasks.module.scss'
 
const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
 
  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <button className={styles.closeBtn} onClick={onClose}>Completed Task</button>
        {children}
      </div>
    </div>
  );
};
 
export default Popup;