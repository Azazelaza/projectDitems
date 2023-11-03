import React, { useEffect } from "react";
import { Button, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startPostExpediente } from "../../redux/expediente/thunk";
import { useForm } from "react-hook-form";

export default function FormPet() {
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

  const [alergia] = watch(["alergia"]);

  useEffect(() => {
    if (!!data.Expediente) {
      reset({
        ...data.Expediente,
        nombre: data.petName,
        numero: data.phoneNumber,
      });
    }
  }, [data.Expediente]);
  const saveExpedient = (dataForm) => {
    dispatch(startPostExpediente(uid, device, dataForm));
  };
  return (
    <Form onSubmit={handleSubmit(saveExpedient)}>
      <h1>Expediente Mascota</h1>
      <Row>
        <Col sm={4} className="px-2">
          <Form.Label>Nombre Mascota</Form.Label>
          <InputGroup>
            <Form.Control {...register("nombre")} />
          </InputGroup>
        </Col>
        <Col sm={2} className="px-2">
          <Form.Label>Edad</Form.Label>
          <InputGroup>
            <Form.Control {...register("edad")} />
          </InputGroup>
        </Col>
        <Col sm={2} className="px-2 mb-4">
          <Form.Label>Color</Form.Label>
          <InputGroup>
            <Form.Control {...register("color")} />
          </InputGroup>
        </Col>
        <Col sm={2} className="px-2 mb-4">
          <Form.Label>Tamaño</Form.Label>
          <InputGroup>
            <Form.Control {...register("tamano")} />
          </InputGroup>
        </Col>
        <Col sm={2} className="px-2 mb-4">
          <Form.Label>Peso</Form.Label>
          <InputGroup>
            <Form.Control {...register("peso")} />
            <InputGroup.Text id="icon-email">KG</InputGroup.Text>
          </InputGroup>
        </Col>
        <Col sm={4} className="px-2 mb-4">
          <Form.Label>Veterinario</Form.Label>
          <InputGroup>
            <Form.Control {...register("veterinario")} />
          </InputGroup>
        </Col>
        <Col sm={2} className="px-2">
          <Form.Label>Raza</Form.Label>
          <InputGroup>
            <Form.Control {...register("raza")} />
          </InputGroup>
        </Col>
        <Col sm={2} className="px-2">
          <Form.Label>Sexo</Form.Label>
          <InputGroup>
            <Form.Control {...register("sexo")} />
          </InputGroup>
        </Col>
        <Col sm={4} className="px-2">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control {...register("email")} />
          </InputGroup>
        </Col>
        <Col sm={4} className="px-2">
          <Form.Label>Numero Veterinario</Form.Label>
          <InputGroup>
            <Form.Control {...register("numero")} />
          </InputGroup>
        </Col>
        <Col sm={12} className="px-2">
          <Form.Label>Dirección veterinario</Form.Label>
          <InputGroup>
            <Form.Control {...register("direccion")} />
          </InputGroup>
        </Col>

        <Col sm={3} className="px-2">
          <Form.Check
            inline
            label="Alergias"
            name="group1"
            type={"checkbox"}
            {...register("alergia")}
          />
        </Col>
        <Col sm={3} className="px-2">
          <Form.Check
            inline
            label="Discapacidad"
            name="group1"
            type={"checkbox"}
            {...register("discapacidad")}
          />
        </Col>
        <Col sm={3} className="px-2">
          <Form.Check
            inline
            label="Esterilizado"
            name="group1"
            type={"checkbox"}
            {...register("esterilizado")}
          />
        </Col>
        <Col sm={3} className="px-2 mb-4">
          <Form.Check
            inline
            label="Operaciones"
            name="group1"
            type={"checkbox"}
            {...register("operaciones")}
          />
        </Col>

        {alergia && (
          <Col sm={12} className="px-2 mb-3 text-start">
            <Form.Label>Especificar Alergias (Separadas con coma)</Form.Label>
            <InputGroup>
              <Form.Control {...register("especificar")} />
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
        <small>
          ***Para agregar mas vacunas es necesario tu dispositivo movil
        </small>
      </Row>

      <Row className="px-5 my-5">
        <Col sm={6} className="px-4 border">
          {images[0] ? (
            <>
              <Image src={images[0].image} width={150} height={150} />
            </>
          ) : null}
        </Col>
        <Col sm={6} className="px-4 border">
          {images[1] ? (
            <>
              <Image src={images[1].image} width={150} height={150} />
            </>
          ) : null}
        </Col>
        <Col sm={6} className="px-4 border">
          {images[2] ? (
            <>
              <Image src={images[2].image} width={150} height={150} />
            </>
          ) : null}
        </Col>
        <Col sm={6} className="px-4 border">
          {images[3] ? (
            <>
              <Image src={images[3].image} width={150} height={150} />
            </>
          ) : null}
        </Col>
      </Row>
      <Button type="submit" className="text-white float-end mt-4">
        Guardar Información
      </Button>
    </Form>
  );
}
