import React from "react";
import styles from "../skills/SkillsStyles.module.css";

function SkillList({ skill, level }) {
  return (
    <div className={styles.skillItem}>
      <p className={styles.skillName}>{skill}</p>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar}>
          <div style={{ width: `${level}%` }} className={styles.progress}></div>
        </div>
        {/* <span className={styles.skillLevel}>{level}%</span> */}
      </div>
    </div>
  );
}

export default SkillList;
