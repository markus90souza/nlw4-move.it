import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    border-radius: 4px;
    background-color: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

// .ChallengeBoxNotIsActive {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
  
//   .ChallengeBoxNotIsActive strong {
//     font-size: 1.5rem;
//     font-weight: 500;
//     line-height: 1.4;
//   }
  
//   .ChallengeBoxNotIsActive p {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     line-height: 1.4;
//     max-width: 70%;
//     margin-top: 3rem;
//   }
  
//   .ChallengeBoxNotIsActive p img {
//     margin-bottom: 1rem;
//   }
  
//   .ChallengeActive {
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//   }
  
//   .ChallengeActive header {
//     color: var(--blue);
//     font-weight: 600;
//     font-size: 1.25rem;
//     padding: 0 2rem 1.5rem;
//     border-bottom: 1px solid var(--gray-line);
//   }
  
//   .ChallengeActive main {
//     display: flex;
//     flex: 1;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .ChallengeActive main strong {
//     font-size: 2rem;
//     font-weight: 600;
//     color: var(--title);
//     margin: 1.5rem 0 1rem;
//   }
  
//   .ChallengeActive main p {
//     line-height: 1.4;
//   }
  
//   .ChallengeActive footer {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1rem;
//   }
  
//   .ChallengeActive footer button {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 0;
//     outline: none;
//     height: 3rem;
  
//     color: var(--white);
//     font-size: 1rem;
//     font-weight: 600;
//     border-radius: 4px;
  
//     transition: filter 0.2s;
//   }
  
//   .ChallengeActive footer button:hover {
//     filter: brightness(0.9);
//   }
  
//   .ChallengeActive footer button.ChallengeFailedButton {
//     background-color: var(--red);
//   }
  
//   .ChallengeActive footer button.ChallengeSucceededButton {
//     background-color: var(--green);
//   }
  