/** @format */

import React from 'react';
import {Link} from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <div
        className="logo"
        style={{
          // float: 'left',
          // width: '120px',
          // height: '31px',
          width: "8vw",
          height: "4vh",
          margin: '16px 24px 16px 0',
          background: 'rgba(255, 255, 255, 0.3)',
          position: "absolute",
        }}
      >
      </div>
    </Link>
  );
}

export default Logo;
