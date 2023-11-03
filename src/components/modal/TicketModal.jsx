import React from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startHiddenModal } from "../../redux/modal/thunk";
import { useForm } from "react-hook-form";
import { startPostTicket } from "../../redux/tickets/thunk";
import { useEffect } from "react";

export const TicketModal = () => {
  const { show } = useSelector((state) => state.modal);
  const { uid, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset();
  }, [show]);

  const saveTicket = (data) => {
    dispatch(startPostTicket({ ...data, request_user_id: uid, email }));
  };

  const handleClose = () => {
    dispatch(startHiddenModal());
  };

  return (
    <Modal show={show === "ticket"} onHide={handleClose} size="lg" centered>
      <Modal.Body className="modal-ticket">
        <Form onSubmit={handleSubmit(saveTicket)}>
          <Row className="m-auto justify-content-center">
            <div className="text-center p-4">
              <h4>Lamentamos que tengas dificultades con tu dispositivo</h4>
              <h6>Comentanos cual es tu problema</h6>
            </div>
            <Col md={10} className="px-4">
              <Form.Label>Problema</Form.Label>
              <InputGroup>
                <Form.Control {...register("incident")} />
              </InputGroup>
            </Col>
            <Col md={10} className="px-4 mt-3">
              <Form.Label>Descripcion</Form.Label>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("description")}
                />
              </InputGroup>
            </Col>
          </Row>
          <Button type="submit" className="m-auto d-block mt-4">
            Enviar Ticket de soporte
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
