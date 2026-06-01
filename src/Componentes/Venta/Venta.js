import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";

function Venta() {
  const { state } = useLocation();

  return (
    <Container className="mt-5">
      <h2 className="text-success text-center">VENTA REALIZADA CON ÉXITO</h2>

      <Card className="mt-4 p-4">
        <h4 className="mb-3">Detalle de la Venta</h4>

        <p>
          <strong>Cliente:</strong> {state?.cliente || "No especificado"}
        </p>

        <p>
          <strong>Producto:</strong> {state?.producto || "No especificado"}
        </p>

        <p>
          <strong>Precio:</strong> Bs. {state?.precio || "0"}
        </p>
      </Card>

      <div className="text-center">
        <Link to="/">
          <Button className="mt-3" variant="primary">
            Volver a la página principal
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Venta;
