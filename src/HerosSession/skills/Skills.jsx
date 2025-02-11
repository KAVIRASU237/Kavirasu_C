import React from "react";
import styles from "./SkillsStyles.module.css";
import checkIconDark from "../../images/icons8-tick-64.png";
import checkIconLight from "../../images/icons8-tick-64 (1).png";
import SkillList from "../common/SkillList";
import { useTheme } from "../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const Theme = theme === "dark" ? checkIconLight : checkIconDark;

  const skills = [
    { name: "Java", level: 90 },
    { name: "C++", level: 85 },
    { name: "C", level: 80 },
    { name: "Python", level: 75 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Redux", level: 70 },
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <SkillList
            key={index}
            src={Theme} // Fixed: Now `Theme` is a valid image source
            skill={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
