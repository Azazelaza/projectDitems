import React, { useEffect, useState } from "react";
import { Col, Modal, Row, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startHiddenModal } from "../../redux/modal/thunk";
import ThreeSixty from "react-360-view";
import { Wheel } from "@uiw/react-color";
import { Imagecompany } from "../ui/Imagecompany";

export const DemoModal = () => {
  const [isInteractive, setIsInteractive] = useState(true);
  const [interactive, setInteractive] = useState(1);
  const [colorInteractive, setColorInteractive] = useState("rose");
  const [colorPicker, SetColorPicker] = useState("#0c0c0c");
  const { show } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsInteractive(true);
    dispatch(startHiddenModal());
  };

  let clickes = null;

  const InteractivePetid = () => {
    if (clickes !== null) {
      doubleClickAction();
      clearTimeout(clickes);
      clickes = null;
    } else {
      clickes = setTimeout(() => {
        clickAction();
        clearTimeout(clickes);
        clickes = null;
      }, 200);
    }
  };

  const clickAction = () => {
    if (interactive == 4) {
      setInteractive(1);
    } else {
      setInteractive(interactive + 1);
    }
  };
  const doubleClickAction = () => {
    if (colorPicker !== "#0c0c0c") {
      SetColorPicker("#0c0c0c");
    } else {
      SetColorPicker("#FFFFFF");
    }
  };

  const changePetID = () => {
    setInteractive(1);
    setIsInteractive(!isInteractive);
  };

  return (
    <Modal
      show={show === "petid360"}
      onHide={handleClose}
      size="xl"
      fullscreen="xl-down"
      className="modal-petid360"
    >
      <Modal.Body style={{ minHeight: "750px" }}>
        <Row>
          <Col xs={12}>
            <div className="EquisClose" onClick={handleClose}>
              X
            </div>
          </Col>
          <Col xs={12} xl={8} className="m-auto text-center">
            {isInteractive ? (
              <>
                <Button
                  variant="secondary"
                  className="text-white"
                  onClick={() => changePetID()}
                >
                  Mira tu {import.meta.env.VITE_REACT_APPLICATION_NAME} en 360°
                </Button>
                <h1 className="text-white">
                  ¡Interactua con tu{" "}
                  {import.meta.env.VITE_REACT_APPLICATION_NAME}!
                </h1>
                <Row className="mt-5 pt-3">
                  <Col xs={12} sm={6}>
                    <Imagecompany
                      src={`/interactive/${colorInteractive}/${interactive}.webp`}
                      width={250}
                      onClick={() => InteractivePetid()}
                      style={{
                        position: "relative",
                        zIndex: 2,
                      }}
                    />
                    <h4 className="text-white">Elige tu color preferido</h4>
                    <span
                      style={{ backgroundColor: colorPicker }}
                      className="showLed"
                    ></span>
                    <div className="d-flex justify-content-center py-3">
                      <span
                        className={`ballow-blue
                                        ${
                                          colorInteractive === "blue" &&
                                          "active"
                                        }`}
                        onClick={() => setColorInteractive("blue")}
                      ></span>
                      <span
                        className={`ballow-rose
                                        ${
                                          colorInteractive === "rose" &&
                                          "active"
                                        }`}
                        onClick={() => setColorInteractive("rose")}
                      ></span>
                      {import.meta.env.VITE_REACT_APPLICATIONID == 1 && (
                        <span
                          className={`ballow-lile
                                        ${
                                          colorInteractive === "lile" &&
                                          "active"
                                        }`}
                          onClick={() => setColorInteractive("lile")}
                        ></span>
                      )}
                      {import.meta.env.VITE_REACT_APPLICATIONID == 2 && (
                        <span
                          className={`ballow-green
                                        ${
                                          colorInteractive === "green" &&
                                          "active"
                                        }`}
                          onClick={() => setColorInteractive("green")}
                        ></span>
                      )}
                      <span
                        className={`ballow-red
                                        ${
                                          colorInteractive === "red" && "active"
                                        }`}
                        onClick={() => setColorInteractive("red")}
                      ></span>
                      <span
                        className={`ballow-white
                                        ${
                                          colorInteractive === "white" &&
                                          "active"
                                        }`}
                        onClick={() => setColorInteractive("white")}
                      ></span>
                      <span
                        className={`ballow-black
                                        ${
                                          colorInteractive === "black" &&
                                          "active"
                                        }`}
                        onClick={() => setColorInteractive("black")}
                      ></span>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} className="text-white fs-5">
                    <h2>Instrucciones</h2>
                    <p>
                      <span>1-</span>Pulsar el botón 1 vez: Cambia las imágenes.
                    </p>
                    <p>
                      <span>2-</span>Pulsar el botón 2 veces seguidas:
                      Enciende LED blanco.
                    </p>
                    <p>
                      <span>3-</span>Elige tu color preferido para cambiar el
                      led.
                    </p>
                    <div className="d-flex text-center m-auto justify-content-center">
                      {colorPicker != "#0c0c0c" && (
                        <Wheel
                          color={colorPicker}
                          onChange={(e) => SetColorPicker(e.hex)}
                        />
                      )}
                    </div>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  className="text-white"
                  onClick={() => changePetID()}
                >
                  Interactua con tu{" "}
                  {import.meta.env.VITE_REACT_APPLICATION_NAME}
                </Button>
                <h1 className="text-white">
                  ¡Gira tu {import.meta.env.VITE_REACT_APPLICATION_NAME}!
                </h1>
                <div className="device360 m-auto">
                  <ThreeSixty
                    amount={36}
                    loop
                    imagePath={`/${
                      import.meta.env.VITE_REACT_APPLICATIONID
                    }/img/360/`}
                    fileName="{index}.jpg"
                    autoplay
                  />
                </div>
              </>
            )}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
