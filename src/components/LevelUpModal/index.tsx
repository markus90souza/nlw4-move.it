
import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import * as S from './styles';



const LevelUpModal: React.FC = () => {

  const { level, closeLeveUpModal } = useContext(ChallengeContext);
  return (
    <S.Overlay>
      <S.Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button onClick={closeLeveUpModal}>
          <img src="/icons/close.svg" alt="LevelUp Modal" />
        </button>
      </S.Container>
    </S.Overlay>
    
  );
};

export default LevelUpModal;
