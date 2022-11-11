import styles from '../styles/ProjectBox.module.css'
import ProjectModal from './projectModal'
import {useState} from 'react'

function ProjectBox(props) {
    const [showModal,setShowModal]=useState(false);
    if (showModal) {
        return (
            <>
            <ProjectModal title={props.title} handleClick={setShowModal}/>
            <div onClick={()=>setShowModal(true)} className={styles.projectBox}>
                <h1 className={styles.header}>{props.title}</h1>
                <h3 className={styles.descriptionShort}>{props.descriptionShort}</h3>
            </div>
            </>
          )
    } else {
        return (
            <div onClick={()=>setShowModal(true)} className={styles.projectBox}>
                <h1 className={styles.header}>{props.title}</h1>
                <h3 className={styles.descriptionShort}>{props.descriptionShort}</h3>
                <h3 className={styles.descriptionFull}>{props.descriptionFull}</h3>
            </div>
        
          )
    }

}

export default ProjectBox