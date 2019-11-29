import React from 'react';

import "./LevelCounter.scss";

export default ({ levelCount, totalLevel }) => {
    const getLevels = () => {
        let levels = [];
        for (let x = 1; x <= totalLevel; x++) levels.push(x);

        return levels.map((level, i) => <div className={`level-counter-item ${level <= levelCount ? "active" : ""}`} key={i} />)
    }

    return <div className="level-counter">
        {getLevels()}
    </div>

}