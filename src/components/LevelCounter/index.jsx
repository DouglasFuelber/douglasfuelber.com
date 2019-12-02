import React, { useEffect, useState } from 'react';
import TrackVisibility from 'react-on-screen';

import "./LevelCounter.scss";

export const LevelBar = ({ totalLevel = 5, level, isVisible }) => {
    const [levelState, setLevelState] = useState({
        width: "0%"
    });

    useEffect(() => {
        if (isVisible)
            setLevelState({
                width: `${((level * 100) / totalLevel)}%`
            })
    }, [isVisible]);

    return <div className="level-counter-item" style={levelState}></div>
}

export default ({ level, totalLevel }) => {
    return <TrackVisibility className="level-counter" once>
        <LevelBar level={level} totalLevel={totalLevel} />
    </TrackVisibility>
}