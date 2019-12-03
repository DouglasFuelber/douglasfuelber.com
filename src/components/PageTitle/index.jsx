import React from 'react';

export default ({ title, subtitle1 = null, subtitle2 = null, post = false }) => {
    return <div id="page_title" className="md-grid md-cell--10">
        {
            post ? <h2 className="left-border-area light-border title">{title}</h2>
                : <h1 className="left-border-area light-border">{title}</h1>
        }
        {(subtitle1 != null && subtitle2 != null) 
            ? <h2>{subtitle1}: <span className="md-text-uppercase">{subtitle2}</span></h2> : ""}            
    </div>
}