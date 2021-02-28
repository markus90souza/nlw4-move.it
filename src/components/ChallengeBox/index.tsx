import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/ChallengeBox.module.css'

const ChallengeBox: React.FC = () => {

  const { 
    activeChallenge,
    resetChallenge,
    completedChallenge 
  } = useContext(ChallengeContext);

  const { endCountdown } = useContext(CountdownContext);

  const handleChallangeFailed = () => {
      resetChallenge();
      endCountdown();
  }

  const handleChallangeSucceeded = () => {
    completedChallenge();
    endCountdown();
  }

  return (
    <div className={styles.ChallengeBoxContainer}>
      { activeChallenge ? (

      <div className={styles.ChallengeActive}>
        <header>
          Ganhe {activeChallenge.amount } XP
        </header>

        <main>
          <img src={`icons/${activeChallenge.type}.svg`} alt="Exercite-se" />
          <strong>Novo Desafio</strong>
          <p>{activeChallenge.description}</p>
        </main>

        <footer>
          <button 
            type="button"
            onClick={resetChallenge}
            className={styles.ChallengeFailedButton}>
              Falhei
            </button>
            <button 
            type="button"
            onClick={handleChallangeSucceeded}
            className={styles.ChallengeSucceededButton}>
              Completei
            </button>
        </footer>
      </div>
    ) : (
      <div className={styles.ChallengeBoxNotIsActive}>
      <strong>
        Finalize um ciclo para receber um desafio
      </strong>

      <p>
        <img src="icons/level-up.svg" alt="Level Up"/>
        Avance de Level completado os Desafios
      </p>
    </div> 

    )
 
  }

</div>
  );
}

export default ChallengeBox;
