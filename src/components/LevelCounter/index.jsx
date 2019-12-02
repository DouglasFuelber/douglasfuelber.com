import React from 'react';

import "./LevelCounter.scss";

export default ({ level, totalLevel }) => {
    const getLevel = () => {
        return {
            width: `${(level * 100) / totalLevel}%`
        }
    }

    return <div className="level-counter">
        <div className="level-counter-item" style={getLevel()}></div>
    </div>
}