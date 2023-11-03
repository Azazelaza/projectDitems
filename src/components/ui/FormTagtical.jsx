import React, { useEffect } from "react";
import { Button, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startPostExpediente } from "../../redux/expediente/thunk";
import { useForm } from "react-hook-form";

export default function FormTagtical() {
  const { data, device, images } = useSelector((state) => state.expediente);
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [discapacidad, alergias, operaciones] = watch([
    "discapacidad",
    "alergias",
    "operaciones",
  ]);

  useEffect(() => {
    if (!!data.Expediente) {
      reset({ ...data.Expediente, userName: data.Expediente.nombre });
    }
  }, [data.Expediente]);
  const saveExpedient = (dataForm) => {
    dispatch(startPostExpediente(uid, device, dataForm));
  };
  return (
    <>
      <>
        <Form onSubmit={handleSubmit(saveExpedient)}>
          <h1>Expediente Usuario</h1>
          <Row>
            <Col md={7} className="px-2">
              <Form.Label>Nombre</Form.Label>
              <InputGroup>
                <Form.Control {...register("userName")} />
              </InputGroup>
            </Col>
            <Col md={2} className="px-2">
              <Form.Label>Edad</Form.Label>
              <InputGroup>
                <Form.Control {...register("edad")} />
              </InputGroup>
            </Col>
            <Col md={3} className="px-2 mb-4">
              <Form.Label>Genero</Form.Label>
              <InputGroup>
                <Form.Control {...register("genero")} />
              </InputGroup>
            </Col>
            <Col md={5} className="px-2">
              <Form.Label>Curp</Form.Label>
              <InputGroup>
                <Form.Control {...register("curp")} />
              </InputGroup>
            </Col>
            <Col md={2} className="px-2">
              <Form.Label>Tipo Sangre</Form.Label>
              <InputGroup>
                <Form.Control {...register("tipo_sangre")} />
              </InputGroup>
            </Col>
            <Col md={3} className="px-2">
              <Form.Label>N. Seguro Social</Form.Label>
              <InputGroup>
                <Form.Control {...register("nss")} />
              </InputGroup>
            </Col>
            <Col md={2} className="px-2 mb-4">
              <Form.Label>Peso</Form.Label>
              <InputGroup>
                <Form.Control {...register("peso")} />
              </InputGroup>
            </Col>
            <Col md={3} className="px-2">
              <Form.Check
                inline
                label="Discapacidad"
                name="group1"
                type={"checkbox"}
                {...register("discapacidad")}
              />
            </Col>
            <Col md={3} className="px-2">
              <Form.Check
                inline
                label="Alergias"
                name="group1"
                type={"checkbox"}
                {...register("alergias")}
              />
            </Col>
            <Col md={3} className="px-2 mb-4">
              <Form.Check
                inline
                label="Operaciones"
                name="group1"
                type={"checkbox"}
                {...register("operaciones")}
              />
            </Col>
            {Boolean(alergias) && (
              <Col sm={12} className="px-2 mb-3 text-start">
                <Form.Label>
                  Especificar Alergias (Separadas con coma)
                </Form.Label>
                <InputGroup>
                  <Form.Control {...register("especificar")} />
                </InputGroup>
              </Col>
            )}
            {Boolean(operaciones) && (
              <Col sm={12} className="px-2 mb-3">
                <Form.Label>
                  Especificar Operaciones (Separadas con coma)
                </Form.Label>
                <InputGroup>
                  <Form.Control {...register("especificar_operaciones")} />
                </InputGroup>
              </Col>
            )}
            {Boolean(discapacidad) && (
              <Col sm={12} className="px-2 mb-3">
                <Form.Label>
                  Especificar Discapacidades (Separadas con coma)
                </Form.Label>
                <InputGroup>
                  <Form.Control {...register("especificar_discapacidad")} />
                </InputGroup>
              </Col>
            )}
            {Boolean(data.Expediente.vacunas) && (
              <>
                <Col sm={12}>
                  <h1>Vacunas</h1>
                </Col>
                {data.Expediente.vacunas.map((items, index) => (
                  <Col sm={12} className="px-2 mb-4">
                    <h6>{index + 1}</h6>
                    <p>Fecha: {items.Date}</p>
                    <p>Nombre: {items.VName}</p>
                  </Col>
                ))}
              </>
            )}
            ***Para agregar mas vacunas es necesario tu dispositivo movil
            <h1 className="my-4">Información Contacto</h1>
            <Col md={5} className="px-2">
              <Form.Label>Nombre</Form.Label>
              <InputGroup>
                <Form.Control {...register("nombre_contacto")} />
              </InputGroup>
            </Col>
            <Col md={4} className="px-2">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Form.Control {...register("email_contacto")} />
              </InputGroup>
            </Col>
            <Col md={3} className="px-2">
              <Form.Label>Telefono</Form.Label>
              <InputGroup>
                <Form.Control {...register("numero_contacto")} />
              </InputGroup>
            </Col>
            <Col md={12} className="px-2">
              <Form.Label>Dirección</Form.Label>
              <InputGroup>
                <Form.Control {...register("direccion_contacto")} />
              </InputGroup>
            </Col>
            <h1 className="my-4">Información Medico</h1>
            <Col md={5} className="px-2">
              <Form.Label>Nombre</Form.Label>
              <InputGroup>
                <Form.Control {...register("nombre_medico")} />
              </InputGroup>
            </Col>
            <Col md={4} className="px-2">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Form.Control {...register("email_medico")} />
              </InputGroup>
            </Col>
            <Col md={3} className="px-2 mb-3">
              <Form.Label>Telefono</Form.Label>
              <InputGroup>
                <Form.Control {...register("numero_medico")} />
              </InputGroup>
            </Col>
            <Col md={12} className="px-2">
              <Form.Label>Dirección</Form.Label>
              <InputGroup>
                <Form.Control {...register("direccion_medico")} />
              </InputGroup>
            </Col>
          </Row>

          <Row className="my-5">
            <Col sm={12} xl={6} className="px-4 border">
              {images[0] && (
                <>
                  <Image src={images[0].image} width={200} height={200} />
                </>
              )}
            </Col>
            <Col sm={12} xl={6} className="px-4 border">
              {images[1] && (
                <>
                  <Image src={images[1].image} width={200} height={200} />
                </>
              )}
            </Col>
            <Col sm={12} xl={6} className="px-4 border">
              {images[2] && (
                <>
                  <Image src={images[2].image} width={200} height={200} />
                </>
              )}
            </Col>
            <Col sm={12} xl={6} className="px-4 border">
              {images[3] && (
                <>
                  <Image src={images[3].image} width={200} height={200} />
                </>
              )}
            </Col>
          </Row>
          <Button type="submit" className="text-white float-end mt-4">
            Guardar Información
          </Button>
        </Form>
      </>
    </>
  );
}
