import React from 'react'

function ErrorIcon() {
    return (
        <svg height="100" width="100">
            <polygon
              points="50,25 17,80 82,80"
              // stroke-linejoin="round"
              style={{
                fill: 'none',
                stroke: '#ff8a00',
                strokeWidth: '8',
                strokeLinejoin: 'round',
              }}
            />
            <text
              x="42"
              y="74"
              fill="#ff8a00"
              style={{
                fontFamily: 'sans-serif',
                fontWeight: '900',
                fontSize: '42px',
              }}
            >
              !
            </text>
          </svg>
    )
}

export default ErrorIcon