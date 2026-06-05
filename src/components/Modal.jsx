import React from 'react'
import styles from './Modal.module.css'

const Modal = ({title, show, onClose, children}) => {
  return (
    show ?
      <div className={styles.overlay}>
        <div className={styles.ModalmodalWindow}>
          <div className={styles.titleBar}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.closeButton} onClick={onClose}>X</span>
          </div>
          <div className={styles.modalContent}>
            {children}
          </div>
        </div>
      </div> 
    : null
  )
}

export default Modal