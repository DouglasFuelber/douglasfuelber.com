import React, { useEffect, useState } from 'react';
import TrackVisibility from 'react-on-screen';

import { Container } from './styles';

interface ILevelCounterProps {
  level: number;
  totalLevel?: number;
}

interface ILevelBarProps {
  level: number;
  totalLevel: number;
  isVisible?: boolean;
}

export const LevelBar: React.FC<ILevelBarProps> = ({
  totalLevel = 5,
  level,
  isVisible,
}) => {
  const [levelState, setLevelState] = useState({
    width: '0%',
  });

  useEffect(() => {
    if (isVisible)
      setLevelState({
        width: `${(level * 100) / totalLevel}%`,
      });
  }, [isVisible]);

  return <div className="level-counter-item" style={levelState} />;
};

const LevelCounter: React.FC<ILevelCounterProps> = ({ level, totalLevel }) => {
  return (
    <Container>
      <TrackVisibility className="level-counter" once>
        <LevelBar level={level} totalLevel={totalLevel} />
      </TrackVisibility>
    </Container>
  );
};

export default LevelCounter;
