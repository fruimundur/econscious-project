import React from 'react';
import styles from '../../styles/tasks.module.scss'
import { supabase } from '../../lib/supabaseClient';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClosePopup = () => {
    Popup.isOpen = false;
  };

  return (
    <div className={styles.popup}>
      <div onClick={handleClosePopup} className={styles.popupInner}>
        {children}

      </div>
    </div>
  );
};

export default Popup;