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
        marginLeft: '10vw',
        float: 'left',
      }}
    >
      <Input
        className="i"
        placeholder="Search"
        allowClear
        onPressEnter={searchForVideo}
        style={{
          marginTop: '2vh',
          flexGrow: '1',
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
