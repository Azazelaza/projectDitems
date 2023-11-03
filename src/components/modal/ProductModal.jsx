import React from "react";
import { Col, Modal, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startHiddenModal } from "../../redux/modal/thunk";

export const ProductModal = () => {
  const { show } = useSelector((state) => state.modal);
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(startHiddenModal());
  };

  const payMercadopago = (id) => {
    window.location.href = "http://pay.ditems.com/checkout?product_id=" + id;
  };

  return (
    <Modal
      show={show === "product"}
      onHide={handleClose}
      size="xl"
      className="modal-petid"
    >
      <Modal.Body>
        <Modal.Header closeButton closeVariant="white" />
        <Row className="petid-product">
          <Col sm={12} lg={6} className="image-petd">
            <img
              width={"100%"}
              src={product?.principal_image}
              alt="imagenProducto"
            />
          </Col>
          <Col sm={12} lg={6} className="ilussion">
            <h1>{product?.name}</h1>
            <p>
              {product?.subtitle}
              <br />
            </p>
            <ul>{product?.description}</ul>
            <p>Precio: ${product?.price} MXN</p>
            <Button
              variant="secondary"
              className="text-white"
              onClick={() => payMercadopago(product?.id)}
            >
              Adquirir Producto
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
