import { useState, createContext, useContext , ReactNode, useEffect } from "react";
import { ChallengeContext } from "./ChallengeContext";


type CountdownProviderProps = {
    children: ReactNode;
}

interface CountdownProviderData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    endCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownProviderData );

let countdownTimeout: NodeJS.Timeout;

export const CountdownProvider = ({ children }: CountdownProviderProps ) => {
    

  let timer = 0.1 * 60;

  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(timer);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished,setHasFinished] = useState(false);
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = () =>{
    setIsActive(true);
    }
    
      const endCountdown = () =>{
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(timer);
        setHasFinished(false);
      }
    
      useEffect( () => {
        if(isActive && time > 0){
         countdownTimeout =  setTimeout(() => {
            setTime(time - 1);
          }, 1000);
        } else if(isActive && time === 0 ){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
      }, [isActive, time])


      return (
          <CountdownContext.Provider value={{
              minutes,
              seconds,
              hasFinished,
              isActive,
              startCountdown,
              endCountdown
          }}>
              {children}
          </CountdownContext.Provider>
      )
}
