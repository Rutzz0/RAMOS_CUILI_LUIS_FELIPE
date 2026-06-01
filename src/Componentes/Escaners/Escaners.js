// src/Componentes/Escaners/Escaners.js
import React, { useState } from "react";
import DepBootStrapCarr from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Escaners.css";

import Img1 from "./es1.jpg";
import Img2 from "./es2.jpg";
import Img3 from "./es3.jpg";
import Img4 from "./es4.jpg";
import Img5 from "./es5.jpg";

function Escaners() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const escaners = [
    { img: Img1, nombre: "Escáner Waterfall", precio: 7000 },
    {
      img: Img2,
      nombre: "Escáner Sunset Over  Modelo: FI-7260",
      precio: 6800,
    },
    { img: Img3, nombre: "Escáner Fujitsu Modelo: FI-7800", precio: 7500 },
    { img: Img4, nombre: "Escáner Epson", precio: 7200 },
    { img: Img5, nombre: "Escáner Epson", precio: 7100 },
  ];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleComprar = () => {
    const productoSeleccionado = escaners[index];
    navigate("/comprar", { state: productoSeleccionado });
  };

  return (
    <div className="fondoEscaners">
      <DepBootStrapCarr activeIndex={index} onSelect={handleSelect}>
        {escaners.map((escaner, i) => (
          <DepBootStrapCarr.Item key={i}>
            <img
              className="w-75 h-50 d-inline-block img-fluid rounded"
              src={escaner.img}
              alt={escaner.nombre}
            />
            <DepBootStrapCarr.Caption>
              <h5 className="nombre-escaner">{escaner.nombre}</h5>
              <p className="precio-escaner">Precio: ${escaner.precio}</p>
              <Button
                className="btn-comprar"
                variant="success"
                onClick={handleComprar}
              >
                Comprar
              </Button>
            </DepBootStrapCarr.Caption>
          </DepBootStrapCarr.Item>
        ))}
      </DepBootStrapCarr>
    </div>
  );
}

export default Escaners;
