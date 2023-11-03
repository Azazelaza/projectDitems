import React, { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { startGetMembership } from "../../redux/membershipSlice/thunk";
import { useDispatch, useSelector } from "react-redux";
export default function MemberShip() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.membership);

  useEffect(() => {
    dispatch(startGetMembership());
  }, []);

  const payMercadopago = (id) => {
    window.location.href = "http://pay.ditems.com/checkout?membership_id=" + id;
  };
  
  return (
    <Row className="planes">
      {data.map(
        (item, key) =>
          item.isActive && (
            <Col md={6} lg={4} key={key} className="planes-item">
              <div className="item-area">
                <h2 className="title">{item.name}</h2>
                <p className="description">{item.description}</p>
                <p className="benefits">{item.benefits}</p>
                <p className="price">$ {item.price} MXN</p>
                <Button
                  onClick={() => payMercadopago(item.id)}
                  className="getThis"
                  variant="primary"
                >
                  ¡Consiguelo!
                </Button>
              </div>
            </Col>
          )
      )}
    </Row>
  );
}
