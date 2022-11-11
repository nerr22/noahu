import styles from "../styles/ContentBox.module.css";
import ProjectBox from "./projectBox";

function ContentBox(props) {
  return (
    <div
      id={props.id}
      className={styles.contentBox}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <h1 className={styles.contentBoxHeader}>{props.title}</h1>
      <h2 className={styles.contentBoxContent}>
        Irure aliquip id proident ex pariatur commodo minim. Velit veniam sit
        esse duis elit nostrud labore. Commodo occaecat veniam dolor ullamco
        magna deserunt. Amet anim ipsum elit non aute aute consectetur
        adipisicing aute ipsum minim incididunt. Pariatur sit mollit excepteur
        esse cupidatat culpa. Ut magna nostrud anim proident mollit adipisicing
        proident quis occaecat.
      </h2>
      <h3 className={styles.projectsHeader}>My Projects</h3>
      <div className={styles.contentBoxProjects}>
        <ProjectBox
          title={"Drug Repurposing"}
          descriptionShort={
            "Amet exercitation labore exercitation culpa tempor est eu esse eiusmod."
          }
          descriptionFull={
            "Et aliquip nulla amet magna aute. Magna irure sint aliqua laborum. Proident nulla anim nulla ut nisi sint excepteur. Pariatur eu elit officia id aliquip nostrud. Aute ea irure Lorem nisi ex anim nostrud. Nulla cupidatat ea ea ex duis nostrud ullamco Lorem nisi nulla amet pariatur exercitation est. Qui pariatur eiusmod occaecat minim labore deserunt ad eu pariatur Lorem ea cupidatat nisi laborum. Labore ipsum elit ad sunt incididunt et cupidatat eiusmod culpa."
          }
        />
        <ProjectBox title={"Hello World!"} />
        <ProjectBox title={"Hello World!"} />
        <ProjectBox title={"Hello World!"} />
      </div>
    </div>
  );
}

export default ContentBox;
