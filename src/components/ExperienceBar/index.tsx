import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import styles from '../../styles/components/ExperienceBar.module.css';

// CODE => #rumoaoproximonivel
const ExperienceBar: React.FC = () => {


  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel = Math.floor((currentExperience * 100)) / experienceToNextLevel;
  return (
    <header className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>  
        <span style={{ left: `${percentToNextLevel}%` }} 
        className={styles.currentExperience}>
          { currentExperience } XP
        </span>
      </div>
      <span>{ experienceToNextLevel } XP</span>
   
    </header>
  );
}

export default ExperienceBar;
