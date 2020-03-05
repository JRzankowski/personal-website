import React from 'react';

const Logo = () => (
    <svg viewBox="0 0 800 600">
        <symbol id="s-text">
            <text text-anchor="middle"
                  x="50%"
                  y="35%"
                  className="text--line"
            >
                JRz
            </text>
        </symbol>
        <g className="g-ants">
            <use
                 className="text-copy">
            </use>
            <use
                 className="text-copy">
            </use>
            <use 
                 className="text-copy">
            </use>
            <use
                 className="text-copy">
            </use>
            <use
                 className="text-copy">
            </use>
        </g>
    </svg>
);

export default Logo;