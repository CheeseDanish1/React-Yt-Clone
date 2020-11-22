/** @format */

import React from 'react';

function Logo() {
  return (
    <div
      className="logo"
      style={{
        float: 'left',
        width: '120px',
        height: '31px',
        margin: '16px 24px 16px 0',
        background: 'rgba(255, 255, 255, 0.3)',
      }}
    >
      <img
        src="/assets/images/logo.png"
        alt=""
        style={{
          height: '20px',
          position: 'absolute',
          left: '4vw',
          top: '3vh',
        }}
      />
    </div>
  );
}

export default Logo;
