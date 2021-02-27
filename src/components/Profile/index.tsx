import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import styles from './../../styles/components/Profile.module.css';

const Profile: React.FC = () => {

  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diego3g.png" 
           alt="Diego Fernandes"
      />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;
