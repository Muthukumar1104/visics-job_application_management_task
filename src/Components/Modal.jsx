import React from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Dialog>
        <Modal.Header closeButton onHide={onClose}>
          <Modal.Title>Job Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default CustomModal;
