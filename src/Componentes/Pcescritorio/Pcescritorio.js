import React from "react";
import { Link } from "react-router-dom";
import "./Pcescritorio.css";
export default function Pcescritorio() {
  return (
    <div>
      {" "}
      <div class="container">
        {" "}
        <div class="row">
          {" "}
          <div class="col-lg-4 formato3">
            {" "}
            <div class="card">
              {" "}
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/OPTIPLEX-3080-SFF-2.jpg"
                class="card-img-top"
                alt="Waterfall"
              />{" "}
              <div class="card-body">
                {" "}
                <h5 class="card-title">CPU Dell Optiplex 7090</h5>{" "}
                <p class="card-text">Modelo: MT 360W core i9</p>{" "}
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  {" "}
                  Comprar{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div class="col-lg-4 formato3 ">
            {" "}
            <div class="card">
              {" "}
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/Vostro-3681-SFF-2.jpg"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                {" "}
                <h5 class="card-title">Pc de Escritorio 400 G7</h5>{" "}
                <p class="card-text">Modelo: CORE i5-10500 HP</p>{" "}
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  {" "}
                  Comprar{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div class="col-lg-4 formato3">
            {" "}
            <div class="card">
              {" "}
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/Vostro-3681-SFF-2.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />{" "}
              <div class="card-body">
                {" "}
                <h5 class="card-title">Pc de Escritorio Vostro 3681</h5>{" "}
                <p class="card-text">Modelo: SFF 10TH GEN i3</p>{" "}
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
