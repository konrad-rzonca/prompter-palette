import React, { useState } from 'react';
import cn from 'classnames';

export default function Tooltip({ content, children }) {
    const [visible, setVisible] = useState(false);

    if (!content) {
        return children;
    }

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            <div className={cn('tooltip-popup', visible ? 'tooltip-visible' : 'tooltip-hidden')}>
                {content}
                <div className="tooltip-arrow" />
            </div>
        </div>
    );
}