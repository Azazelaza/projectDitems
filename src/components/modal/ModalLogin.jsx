import React, { useMemo, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../../hooks/useForm";
import { startLoginUserWithEmailPassword } from "../../redux/slices/thunks";
import ButtonSocial from "../ui/ButtonSocial";
import { useValidate } from "../../hooks/useValidate";
import { useNavigate } from "react-router-dom";
import { startHiddenModal } from "../../redux/modal/thunk";

export default function ModalLogin() {
  const { show } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const [showPass, setShowPass] = useState();
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    errorsInput: [],
  };

  const { values, handleInputChange, setFormValues } = useForm(initialValues);

  const { email, password, errorsInput } = values;

  const handleClose = () => {
    setFormValues(initialValues);
    dispatch(startHiddenModal());
  };

  const loginMail = async (e) => {
    e.preventDefault();
    const validate = await useValidate({ values, type: "login", errorsInput });
    if (!validate.isValid) {
      setFormValues({ ...values, errorsInput: validate.errorsInput });
      return;
    } else {
      setFormValues({ ...values, errorsInput: [] });
    }

    const response = await dispatch(
      startLoginUserWithEmailPassword({ email, password })
    );

    if (response.response) {
      handleClose();
      navigate("/panel");
    } else {
      setFormValues({
        ...values,
        errorsInput: [
          "El usuario que solicitas no se encontro en el sistema, verifica tus datos",
        ],
      });
    }
  };
  return (
    <>
      <Modal
        show={show === "login"}
        onHide={handleClose}
        size="lg"
        centered="true"
        className="modal-login-section"
      >
        <div className="image-background">
          <Modal.Header closeButton>
            <Modal.Title className="title-login">Iniciar sesion</Modal.Title>
          </Modal.Header>
          <div className="login-modal">
            {errorsInput.length > 0 && (
              <div className="errors-modal">
                {errorsInput.map((err, key) => (
                  <p key={key}>{err}</p>
                ))}
              </div>
            )}
            <form onSubmit={loginMail} className="input-groups-login">
              <InputGroup className="mb-3">
                <InputGroup.Text id="icon-email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </InputGroup.Text>
                <Form.Control
                  onChange={handleInputChange}
                  value={email}
                  name="email"
                  placeholder="Correo electronico"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="icon-pass">
                  <FontAwesomeIcon icon={faKey} />
                </InputGroup.Text>
                <Form.Control
                  type={showPass ? "text" : "password"}
                  onChange={handleInputChange}
                  value={password}
                  onDragEnter={() => loginMail()}
                  name="password"
                  placeholder="Contraseña"
                />
                <InputGroup.Text
                  id="icon-show"
                  onClick={() => setShowPass((e) => !e)}
                >
                  {showPass ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </InputGroup.Text>
              </InputGroup>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="fourth"
              >
                Ingresar
              </Button>
            </form>
            <ButtonSocial isAuthenticating={isAuthenticating} />
          </div>
        </div>
      </Modal>
    </>
  );
}
