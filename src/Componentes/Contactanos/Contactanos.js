import "./Contactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//<FontAwesomeIcon icon="fa-brands fa-instagram" />
//<FontAwesomeIcon icon="fa-brands fa-tiktok" />
//<FontAwesomeIcon icon="fa-solid fa-envelope" />
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contactanos = () => {
  return (
    <div class="container">
      {" "}
      <div>
        {" "}
        <div class="container-cont">
          {" "}
          <h4 class="cont-titulo">Sucursales</h4>{" "}
          <div class="cont-direccion">
            {" "}
            <i class="bi bi-geo-alt i-cont"></i> <p>Cotacota - oficina 767</p>{" "}
          </div>{" "}
          <div class="cont-direccion">
            {" "}
            <i class="bi bi-geo-alt i-cont"></i> <p>Los Pinos - oficina 345</p>{" "}
          </div>{" "}
          <div class="cont-direccion">
            {" "}
            <i class="bi bi-geo-alt i-cont"></i> <p>La Paz - Bolivia</p>{" "}
          </div>{" "}
        </div>
        <div class="container-cont">
          {" "}
          <h4 class="cont-titulo">Contactanos</h4>{" "}
          <div class="cont-detalle">
            {" "}
            <h5 class="detalle-titulo">Redes</h5>{" "}
            <a href="" target="_blank" rel="noreferrer">
              {" "}
              <h1>
                {" "}
                <FontAwesomeIcon icon={faPaperPlane} />{" "}
              </h1>{" "}
            </a>{" "}
            <a href="" target="_blank" rel="noreferrer">
              {" "}
              <h1>
                {" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </h1>{" "}
            </a>{" "}
            <a href="" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faTiktok} />{" "}
            </a>{" "}
          </div>{" "}
          <div class="cont-detalle">
            {" "}
            <h5 class="detalle-titulo">WhatsApp</h5>{" "}
            <a href="" target="_blank" rel="noreferrer">
              {" "}
              <h1>
                {" "}
                <FontAwesomeIcon icon={faWhatsapp} />{" "}
              </h1>{" "}
            </a>{" "}
          </div>{" "}
          <div class="cont-detalle">
            {" "}
            <h5 class="detalle-titulo">Email</h5>{" "}
            <p class="p-email">
              {" "}
              <h1>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </h1>{" "}
              pdvp.com@gmail.com{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Contactanos;
