import styles from '../styles/ProjectModal.module.css'
import Linkify from 'react-linkify'

import React from 'react'

function ProjectModal(props) {
  let links
  if (props.links!==[]) {
    links = props.links.map((link)=>(<><Linkify key={link}><span className={styles.link}>{link}</span></Linkify><br/></>))
  } else if (props.links.length===0) {
    links = <p>No Links for this Project</p>
  }
  return (
    <div className={styles.projectModal}>
      <div className={styles.overlay}>
        <div className={styles.modal}>
        <span onClick={()=>props.handleClick(false)} className={styles.closeModal}>x</span>
          <h1 className={styles.modalHeader}>{props.title}</h1>
          <h3 className={styles.descriptionFull}>{props.descriptionFull}</h3>
          <p><strong>Relevant Links</strong>:</p>
          {links}
        </div>
        </div>
    </div>
  )
}

export default ProjectModal