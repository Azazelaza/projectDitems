import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import sample from "../../resources/icons/sample.png";
import { TicketModal } from "../../components/modal/TicketModal";
import { startShowModal } from "../../redux/modal/thunk";
import { lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startShowExpediente } from "../../redux/expediente/thunk";

const FormTagtical = lazy(() => import("../../components/ui/FormTagtical"));
const FormPetID = lazy(() => import("../../components/ui/FormPet"));

export default function Panel() {
  const { data } = useSelector((state) => state.expediente);
  const { email, displayName, photoURL, uid } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startShowExpediente({ uid }));
  }, []);
  return (
    <div className="profiler">
      <Row id="profile-user">
        <Col md={2}>
          <img src={data.Avatar ?? photoURL ?? sample} alt="imagen" />
        </Col>
        <Col md={4}>
          <b>{displayName ?? "Usuario"}</b>
        </Col>
        <Col md={6}>
          <p>{email}</p>
        </Col>
      </Row>
      <Row id="data-petid">
        {!!data?.Expediente ? (
          <>
            {import.meta.env.VITE_REACT_APPLICATIONID == 2 && <FormTagtical />}
            {import.meta.env.VITE_REACT_APPLICATIONID == 1 && <FormPetID />}
          </>
        ) : (
          <>
            <Col md={12}>
              <h3>¡Gracias por suscribirte!</h3>
              <p>Todavia no tienes tienes un dispositivo registrado</p>
              <p>
                Registralo mediante tu telefono para comenzar a usar este sitio
              </p>
            </Col>
          </>
        )}
      </Row>
      <div
        role="button"
        className="Holdtickets"
        onClick={() => dispatch(startShowModal("ticket"))}
      >
        Tengo un problema con mi dispositivo
      </div>
      <TicketModal />
    </div>
  );
}
