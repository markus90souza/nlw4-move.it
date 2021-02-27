
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import styles from './../styles/pages/Home.module.css';

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/ChallengesCompleted';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengeProvider } from '../contexts/ChallengeContext';

type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = (props: HomeProps) => {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}

    >
      <div className={styles.container}>
      <Head>
        <title>Home | Move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallengeProvider>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {


const { 
  level,
  currentExperience,
  challengesCompleted
} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
