import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AlertModal = ({ show, handleClose, message, isSuccess }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className={isSuccess ? 'border-success' : 'border-danger'}
    >
      <Modal.Header closeButton>
        <Modal.Title>{isSuccess ? 'Success' : 'Error'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
