import styles from '../styles/ProjectBox.module.css'
import ProjectModal from './projectModal'
import { useState } from 'react';

function ProjectBox(props) {
    const [showModal,setShowModal]=useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    
        // Unsets Background Scrolling to use when SideDrawer/Modal is closed
        document.body.style.overflow = 'unset';
    }
    const handleShowModal = () => { 
      setShowModal(true);
      'no scrolling!'
      document.body.style.overflow = 'hidden';
    }
    const project = props.project
    const truncate = (words) =>{
        const wordList = words.split(' ')
        let truncatedWords
        if (wordList.length>45) {
            const tokens = wordList.slice(0,45)
            truncatedWords = tokens.join(' ')
            return truncatedWords+' ****Click to read more'
        } else {
            return words
        }
    }
    if (showModal) {
        return (
            <>
            <div onClick={()=>handleShowModal()} className={styles.projectBox}>
                <h1 className={styles.header}>{project.title}</h1>
                <h3 className={styles.descriptionShort}>{project.descriptionShort}</h3>
            </div>
            <ProjectModal title={project.title} descriptionFull={project.descriptionFull} links={project.links} img = {project.img} handleClick={handleCloseModal}/>
            </>
          )
    } else {
        return (
            <div onClick={()=>handleShowModal()} className={styles.projectBox}>
                <h1 className={styles.header}>{project.title}</h1>
                <h3 className={styles.descriptionShort}>{project.descriptionShort}</h3>
                <h3 className={styles.descriptionFull}>{truncate(project.descriptionFull)}</h3>
            </div>
        
          )
    }

}

export default ProjectBox