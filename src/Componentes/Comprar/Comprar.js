import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import "./Comprar.css";

function Comprar() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [cliente, setCliente] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [vendedor, setVendedor] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleAceptar = () => {
    navigate("/venta", {
      state: {
        cliente,
        producto: state?.nombre,
        precio: state?.precio,
        fecha,
        hora,
        vendedor,
        observaciones,
      },
    });
  };

  const handleCancelar = () => {
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h3 className="text-center mb-4">DATOS DEL CLIENTE</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Juan Pérez"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Producto</Form.Label>
          <Form.Control type="text" value={state?.nombre || ""} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" value={state?.precio || ""} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre del vendedor</Form.Label>
          <Form.Control
            type="text"
            value={vendedor}
            onChange={(e) => setVendedor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" onClick={handleCancelar}>
            Cancelar
          </Button>

          <Button variant="danger" onClick={handleAceptar}>
            Aceptar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Comprar;
