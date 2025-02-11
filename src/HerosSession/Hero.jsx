import React from 'react'
import styles from './Hero.module.css'
import heroimg from '../images/cartoon-Photoroom.png'
import moon from '../images/moon.png'
import sun from '../images/sun.png'
import twitterdark from "../images/icons8-twitter-50.png";
import twitterlight from "../images/icons8-twitter-50 (1).png";
import youtubedark from "../images/icons8-youtube-50.png";
import youtubelight from "../images/icons8-youtube-50 (1).png";
import facebookdark from "../images/icons8-facebook-50.png";
import facebooklight from "../images/icons8-facebook-50 (1).png";
import githubdark from "../images/icons8-github-64.png";
import githublight from "../images/icons8-github-64 (1).png";
import linkedindark from "../images/icons8-linkedin-48.png";
import linkedinlight from "../images/icons8-linkedin-48 (1).png";
import { useTheme } from './common/ThemeContext'


const Hero = () => {

    const { theme, toggleTheme } = useTheme()

    const Theme = theme === 'dark' ? sun: moon
    const  twitterIcon= theme === 'dark' ? twitterlight : twitterdark
    const youtubeIcon = theme === 'dark' ? youtubelight : youtubedark
    const facebookIcon= theme === 'dark' ? facebooklight : facebookdark
    const githubIcon= theme === 'dark' ? githublight : githubdark
    const linkedinIcon = theme === 'dark' ? linkedinlight : linkedindark

  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            className={styles.hero}
            src={heroimg}
            alt="Profile Picture of Kavirasu"
          />
          <img
            className={styles.colorMode}
            src={Theme}
            alt="Color mode"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>kavirasu</h1>
          <h2>web Developer</h2>

          <span>
            <a href="https://x.com/Kavirasu_C" target="_blank">
              <img src={twitterIcon} alt="twitterIcon" />
            </a>
            <a href="https://www.youtube.com/@Kavirasu_C">
              <img src={youtubeIcon} alt="youtubeIcon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572290333700&sk"
              target="_blank"
            >
              <img src={facebookIcon} alt="facebook-Icon" />
            </a>
            <a href="https://github.com/KAVIRASU237" target="_blank">
              <img src={githubIcon} alt="github-Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/kavirasu-c-00028928a/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="linkedin-Icon" />
            </a>
          </span>
          <p className={styles.description}>
            I'm a passionate web developer currently learning modern web
            technologies. I enjoy building responsive, user-friendly websites
            and improving my skills in MERN stack. 
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero
