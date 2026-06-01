import React from "react";
import { Link } from "react-router-dom";
import "./Impresoras.css";
export default function Impresoras() {
  return (
    <div>
      {" "}
      <div class="container">
        {" "}
        <div class="row">
          {" "}
          <div class="col-lg-4 formato2">
            {" "}
            <div class="card">
              {" "}
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/IMPRESORA-MATRICIAL-EPSON-LQ-590II-2.jpg"
                class="card-img-top"
                alt="Waterfall"
              />{" "}
              <div class="card-body">
                {" "}
                <h5 class="card-title">Impresora Matricial </h5>{" "}
                <p class="card-text">Modelo: LQ-590II EPSON</p>{" "}
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  {" "}
                  Comprar{" "}
                </a>{" "}
              </div>{" "}
            </div>
          </div>{" "}
          <div class="col-lg-4 formato2 ">
            {" "}
            <div class="card">
              {" "}
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/IMPRESORA-HP-M507-DN-2.jpg"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />{" "}
              <div class="card-body">
                {" "}
                <h5 class="card-title">Impresora LaserJet Enterprise</h5>{" "}
                <p class="card-text">Modelo: M612dn HP</p>{" "}
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  {" "}
                  Comprar{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div class="col-lg-4 formato2">
            {" "}
            <div class="card">
              {" "}
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/IMPRESORA-EPSON-DFX-9000-2.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />{" "}
              <div class="card-body">
                {" "}
                <h5 class="card-title">Impresora matricial </h5>{" "}
                <p class="card-text">Modelo:Epson LQ590II</p>{" "}
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  {" "}
                  Comprar{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Link to="/">
        {" "}
        <a href="#!" data-mdb-ripple-init class="btn btn-warning">
          {" "}
          Volver a la pagina Principal{" "}
        </a>{" "}
      </Link>{" "}
    </div>
  );
}
