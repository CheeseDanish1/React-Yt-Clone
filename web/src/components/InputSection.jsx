/** @format */

import React from 'react';
import {Button, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

function InputSection() {
  const searchForVideo = e => {
    let input = e.target.value || document.querySelector('input').value || null;
    if (!input) return;
    window.location.replace(`/search?q=${input}`);
  };

  return (
    <div
      className="input"
      style={{
        // float: 'left',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        display: "flex"
      }}
    >
      <Input
        className="i"
        placeholder="Search"
        allowClear
        onPressEnter={searchForVideo}
        style={{
          marginTop: '2vh',
          maxWidth: '800px',
          width: '50vw',
        }}
      />
      <Button
        onClick={searchForVideo}
        type="primary"
        style={{marginTop: '2vh'}}
      >
        <SearchOutlined onClick={searchForVideo} />
      </Button>
    </div>
  );
}

export default InputSection;
