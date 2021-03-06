import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import LevelUpModal from "../components/LevelUpModal";

type ChallengeProviderProps = {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

type Challenge = {
    type: "body" | "eye";
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
    closeLeveUpModal: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export const ChallengeProvider = ({ children,
     ...rest  } : ChallengeProviderProps) => {

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const experienceToNextLevel = Math.pow((level + 1 ) * 4, 2);
    

    useEffect( () => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    }, [level, currentExperience, challengesCompleted]);

    const levelUp = () => {
        setLevel(level + 1)
        setIsLevelUpModalOpen(true);
    }

    const closeLeveUpModal = () => {
        setIsLevelUpModalOpen(false);
    }

    const startNewChallenge = () => {
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio', {
                body: `Valendo ${challenge.amount} XP`
            });
        }
    }

    const resetChallenge = () => {
        setActiveChallenge(null);   
    }

    const completedChallenge = () => {
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }

    return (
        <ChallengeContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completedChallenge,
            closeLeveUpModal
        }}>
            {children}

            {
                isLevelUpModalOpen && <LevelUpModal />
            }
            
        </ChallengeContext.Provider>
    )
}