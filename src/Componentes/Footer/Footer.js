import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Sintaxis camelCase
//<FontAwesomeIcon icon="fa-solid fa-phone" />
import {
  faHouse,
  faUser,
  faLocationDot,
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer class="footer pt-5 pb-4 ">
      {" "}
      <div class="container text-center text-md-start f1">
        {" "}
        <div class="row text-center text-md-start">
          {" "}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 footer-enlace f1">
            {" "}
            <h5>NUESTRAS OFICINAS</h5> <hr class="mb-4" />{" "}
            <p class="footer-direccion">
              {" "}
              <FontAwesomeIcon icon={faHouse} />{" "}
              <a
                href="#"
                class="footer-enlace"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Av. Arce - SoftTech s.r.l. - Subsuelo 7887{" "}
              </a>{" "}
            </p>
            <p class="footer-direccion">
              {" "}
              <FontAwesomeIcon icon="fa-solid fa-diamond-turn-right" />{" "}
              <FontAwesomeIcon icon={faUser} />{" "}
              <a
                href="#"
                class="footer-enlace"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Cotacota - Oficina 767{" "}
              </a>{" "}
            </p>{" "}
            <p class="footer-direccion">
              {" "}
              <i class="bi bi-geo-alt icon-direccion"></i>{" "}
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <a
                href="#"
                class="footer-enlace"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Los pinos - Oficina 345{" "}
              </a>{" "}
            </p>{" "}
          </div>{" "}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            {" "}
            <h5 class="footer-enlace">
              METODOS DE PAGO
            </h5> <hr class="mb-4" />{" "}
            <p class="footer-direccion">
              {" "}
              Efectivo <br /> Transferencia <br /> Codigo QR <br />{" "}
            </p>{" "}
          </div>{" "}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 footer-enlace">
            {" "}
            <h5>CONTACTANOS</h5> <hr class="mb-4" />{" "}
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />{" "}
            </a>{" "}
            <br />{" "}
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faPhone} />{" "}
            </a>{" "}
            <br />
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faPaperPlane} />{" "}
            </a>{" "}
            <br />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
