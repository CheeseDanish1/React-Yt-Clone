/** @format */

import {Modal, Button} from 'antd';
import React, {useState} from 'react';

function ModalExample() {
  const [visible, setVisibility] = useState(false);

  const showModal = () => setVisibility(true);

  const handleOk = () => setVisibility(false);

  const handleCancel = () => setVisibility(false);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ModalExample;
