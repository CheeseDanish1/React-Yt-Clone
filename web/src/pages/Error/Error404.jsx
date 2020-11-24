/** @format */

import React from 'react';
import ErrorIcon from '../../components/ErrorIcon';

function Error404() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#eeeeee',
          fontFamily: 'sans-serif',
          padding: 0,
          margin: 0,
          textAlign: 'center',
          fontWeight: 'normal',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -70%)',
          }}
        >
          <ErrorIcon />
          <h1
            style={{
              fontSize: '48px',
              fontWeight: '300',
              margin: '0 0 20px 0',
              fontFamily: 'sans-serif',
              padding: 0,
              textAlign: 'center',
            }}
          >
            404 Error: Web Page not found{' '}
          </h1>
          <p
            style={{
              fontSize: '21px',
              fontWeight: '200',
              marginBottom: '20px',
              fontFamily: 'sans-serif',
              margin: 0,
              padding: 0,
              textAlign: 'center',
            }}
          >
            If you think what you are looking for should be here, please try
            contacting
            <br />
            the site owner.
          </p>
        </div>
      </div>
    </>
  );
}

export default Error404;
