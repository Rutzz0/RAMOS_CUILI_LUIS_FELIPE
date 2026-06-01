import CarrucelDeImagenes from "./Carrusel/Carrusel";
import "./Home.css";
import { Link } from "react-router-dom";
import Escaners from "./Imagenes/escaners.webp";
import Portatiles from "./Imagenes/portatilhppavilion.webp";
import Pc from "./Imagenes/pcdelloptiplex7090.webp";
import Impresoras from "./Imagenes/impepson321.webp";
const Home = () => {
  return (
    <div class="fondo">
      {" "}
      <CarrucelDeImagenes />{" "}
      <div class="container fondo">
        {" "}
        <div class="row row-cols-2">
          {" "}
          <div class="col-md-6">
            {" "}
            <Link to={"/Escaners"} className="enlace">
              {" "}
              <img
                class="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Escaners}
                alt=""
              ></img>{" "}
              <h6>Escaners</h6>{" "}
            </Link>{" "}
          </div>
          <div class="col-md-6">
            {" "}
            <Link to={"/Portatiles"} className="enlace">
              {" "}
              <img
                class="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Portatiles}
                alt=""
              ></img>{" "}
              <h6>Portatiles</h6>{" "}
            </Link>{" "}
          </div>{" "}
          <div class="col-md-6">
            {" "}
            <Link to={"/Pcescritorio"} className="enlace">
              {" "}
              <img
                class="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Pc}
                alt="foto sport"
              ></img>{" "}
              <h6>Pc-Escritorio</h6>{" "}
            </Link>{" "}
          </div>{" "}
          <div class="col-md-6">
            {" "}
            <Link to={"/Impresoras"} className="enlace">
              {" "}
              <img
                class=" w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Impresoras}
                alt=""
              ></img>{" "}
              <h6>Impresoras</h6>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Home;
