import React from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import {
  startAddItemCart,
  startClearItem,
  startGetCart,
  startHiddenCart,
  startMinusItemCart,
  startVisibleCart,
} from "../../redux/cart/thunk";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const Cart = () => {
  const dispatch = useDispatch();
  const { show, cart } = useSelector((state) => state.cart);
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length) {
      dispatch(startGetCart(products));
    }
  }, [products]);

  const handleClose = () => {
    dispatch(startHiddenCart());
  };

  return (
    <div>
      {!show && (
        <div
          className="cart-icon-sidebar"
          onClick={() => dispatch(startVisibleCart())}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      )}

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="cart-body"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <FontAwesomeIcon icon={faCartShopping} /> Carrito de compras
        </Offcanvas.Header>
        {cart.length ? (
          <>
            <Offcanvas.Body>
              {cart.map((item) => (
                <Row className="product-item-cart">
                  <Col xs={4} sm={3} className="m-auto">
                    <img
                      className="image-product"
                      width="100%"
                      src={
                        products.find((product) => product.id == item.id)
                          ?.principal_image
                      }
                    />
                  </Col>
                  <Col xs={7} sm={8}>
                    <h4 className="title-product">
                      {products.find((product) => product.id == item.id)?.name}
                    </h4>
                    <p className="price-product">
                      $
                      {products.find((product) => product.id == item.id)?.price}{" "}
                      MXN
                    </p>
                    <p className="quantity-product">
                      <span
                        className="minus"
                        onClick={() =>
                          dispatch(startMinusItemCart({ product_id: item.id }))
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </span>
                      <span className="quantity">{item.quantity}</span>
                      <span className="sumus">
                        <FontAwesomeIcon
                          icon={faPlus}
                          onClick={() =>
                            dispatch(
                              startAddItemCart({
                                product_id: item.id,
                                products,
                              })
                            )
                          }
                        />
                      </span>
                    </p>
                  </Col>
                  <Col
                    xs={1}
                    className="m-auto cursor-pointer"
                    onClick={() => dispatch(startClearItem(item.id))}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Col>
                </Row>
              ))}
            </Offcanvas.Body>
            <Button
              className="m-3 complete-cart"
              onClick={() =>
                (window.location.href =
                  "https://pay.ditems.com/checkout?cart=" +
                  localStorage.getItem("cart"))
              }
            >
              Finalizar Compra
            </Button>
          </>
        ) : (
          <h3 className="m-auto">Carrito vacio</h3>
        )}
      </Offcanvas>
    </div>
  );
};
