import styles from '../styles/ProjectModal.module.css'

import React from 'react'

function ProjectModal(props) {
  return (
    <div className={styles.projectModal}>
      <div onClick={()=>props.handleClick(false)} className={styles.overlay}>
        <div className={styles.modal}>
          <h1 className={styles.modalHeader}>{props.title}</h1>
        </div>
        </div>
    </div>
  )
}

export default ProjectModal