import styles from "../styles/ContentBox.module.css";

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
        <div className={styles.project}>

        </div>
        <div className={styles.project}>
            
            </div>
      </div>
    </div>
  );
}

export default ContentBox;
