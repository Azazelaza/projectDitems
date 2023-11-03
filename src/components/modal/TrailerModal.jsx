import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startHiddenModal } from "../../redux/modal/thunk";

export const TrailerModal = () => {
  const { show } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(startHiddenModal());
  };

  return (
    <Modal
      show={show === "trailer"}
      onHide={handleClose}
      size="xl"
      className="modal"
      contentClassName="bg-transparent border-0"
    >
      <Modal.Body className="bg-transparent">
        <Row className="m-auto">
          <video
            src={`/${
              import.meta.env.VITE_REACT_APPLICATIONID
            }/video/videoplayback.mov`}
            autoPlay
            width="100%"
          />
        </Row>
      </Modal.Body>
    </Modal>
  );
};
