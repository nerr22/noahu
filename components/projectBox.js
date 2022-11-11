import styles from '../styles/ProjectBox.module.css'
import ProjectModal from './projectModal'
import { useState } from 'react';

function ProjectBox(props) {
    const [showModal,setShowModal]=useState(false);
    const project = props.project
    const truncate = (words) =>{
        const wordList = words.split(' ')
        let truncatedWords
        if (wordList.length>45) {
            const tokens = wordList.slice(0,45)
            truncatedWords = tokens.join(' ')
            return truncatedWords+'... *Click to read more*'
        } else {
            return words
        }
    }
    if (showModal) {
        return (
            <>
            <div onClick={()=>setShowModal(true)} className={styles.projectBox}>
                <h1 className={styles.header}>{project.title}</h1>
                <h3 className={styles.descriptionShort}>{project.descriptionShort}</h3>
            </div>
            <ProjectModal title={project.title} descriptionFull={project.descriptionFull} links={project.links} img = {project.img} handleClick={setShowModal}/>
            </>
          )
    } else {
        return (
            <div onClick={()=>setShowModal(true)} className={styles.projectBox}>
                <h1 className={styles.header}>{project.title}</h1>
                <h3 className={styles.descriptionShort}>{project.descriptionShort}</h3>
                <h3 className={styles.descriptionFull}>{truncate(project.descriptionFull)}</h3>
            </div>
        
          )
    }

}

export default ProjectBox