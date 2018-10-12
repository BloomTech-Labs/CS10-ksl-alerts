import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

const ModalCreateAlert = (props) => {
  let CreateAlertToggle = props.CreateAlertToggle;

  return (
    <Modal trigger={CreateAlertToggle}>
      <Modal.Header>test</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>test</p>
          <p>test</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ModalCreateAlert;