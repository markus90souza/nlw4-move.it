import { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';



const Countdown: React.FC = () => {

  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    endCountdown
  } = useContext(CountdownContext);

  const[ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const[ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

  return (
    <div>    
      <div className={styles.countdownContainer}>
          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </div>
      </div>

      {
        hasFinished ? (
          <button disabled className={styles.startCountdown} >
            Ciclo Encerrado 
          </button>
        ) : ( 
          <>
          {
          isActive ? (

          <button 
            type="button" 
            className={`${styles.startCountdown} ${styles.startCountdownActive}`}
            onClick={endCountdown}
          >
            Abandonar Ciclo 
            </button>
          ) : (
            <button 
            type="button" 
            className={styles.startCountdown}
            onClick={startCountdown}
          >
             Iniciar Ciclo 
            </button>
          )
        }

          </>
        ) 
      }

        
    </div>
  );
}

export default Countdown;
