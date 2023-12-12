import React from "react";
import { Col, Modal, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startHiddenModal } from "../../redux/modal/thunk";
import { startAddItemCart } from "../../redux/cart/thunk";

export const ProductModal = () => {
  const { show } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.products);
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(startHiddenModal());
  };

  const addCart = (item) => {
    dispatch(startAddItemCart({ product_id: item, products: data }));
  };

  const payMercadopago = (id) => {
    window.location.href = "http://pay.ditems.com/checkout?product_id=" + id;
  };

  return (
    <Modal
      show={show === "product"}
      onHide={handleClose}
      size="xl"
      fullscreen="xl-down"
      className="modal-petid"
    >
      <Modal.Body>
        <Modal.Header closeButton closeVariant="white" />
        <Row className="petid-product">
          <Col sm={12} lg={5} className="image-petd">
            <img
              width={"100%"}
              src={product?.principal_image}
              alt="imagenProducto"
              className="d-block m-auto"
            />
          </Col>
          <Col sm={8} lg={7} className="product-text">
            <h1 className="product-name">{product?.name}</h1>
            <p>
              {product?.subtitle}
              <br />
            </p>
            <p>{product?.description}</p>
            <h4 className="mb-4">Precio: ${product?.price} MXN</h4>
            <div>
              <Button
                variant="secondary"
                className="text-white add-cart"
                onClick={() => addCart(product?.id)}
              >
                Añadir a carrito
              </Button>
              <Button
                variant="secondary"
                className="text-white pay-now"
                onClick={() => payMercadopago(product?.id)}
              >
                Adquirir Producto
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
