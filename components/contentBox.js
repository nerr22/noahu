import styles from "../styles/ContentBox.module.css";
import ProjectBox from "./projectBox";
import { useState,useEffect } from "react";

function ContentBox(props) {
  let renderProjects
  if (props.projects.length>0) {
    renderProjects = props.projects.map((project) => (<ProjectBox key={project.title} project={project}/>))
  } else {
    renderProjects = <h3>No Projects Yet, Coming Soon!</h3>
  }
  return (
    <div
      id={props.id}
      className={styles.contentBox}
      style={{ backgroundImage: "url(" + props.backgroundImage + ")",color:props.fontColor}}
    >
    <div className={styles.contentOverlay}>
      <h1 className={styles.contentBoxHeader}>{props.title}</h1>
      <h2 className={styles.contentBoxContent}>
        {props.content}
      </h2>
      <h3 className={styles.projectsHeader}>{props.flavorTitle}</h3>
      <div className={styles.contentBoxProjects}>
        {renderProjects}
      </div>
      </div>
    </div>
  );
}

export default ContentBox;
