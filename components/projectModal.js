import styles from '../styles/ProjectModal.module.css'
import Linkify from 'react-linkify'

import React from 'react'

function ProjectModal(props) {
  let links
  if (props.links!==[]) {
    links = props.links.map((link)=>(<><Linkify key={link}><span className={styles.link}>{link}</span></Linkify><br/></>))
  } else if (props.links===[]) {
    links = <p>No Links for this Project</p>
  }
  return (
    <div className={styles.projectModal}>
      <div onClick={()=>props.handleClick(false)} className={styles.overlay}>
        <div className={styles.modal}>
          <h1 className={styles.modalHeader}>{props.title}</h1>
          <h3 className={styles.descriptionFull}>{props.descriptionFull}</h3>
          <h3>Links:</h3>
          {links}
        </div>
        </div>
    </div>
  )
}

export default ProjectModal