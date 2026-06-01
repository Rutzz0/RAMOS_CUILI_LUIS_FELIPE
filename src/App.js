import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Componentes/NavBar/NavBar";
import Home from "./Componentes/Home/Home";
import Footer from "./Componentes/Footer/Footer";
import Escaners from "./Componentes/Escaners/Escaners.js";
import Portatil from "./Componentes/Portatiles/Portatiles.js";
import PCescritorio from "./Componentes/Pcescritorio/Pcescritorio.js";
import Impresoras from "./Componentes/Impresoras/Impresoras.js";
import Contactanos from "./Componentes/Contactanos/Contactanos.js";
import Comprar from "./Componentes/Comprar/Comprar";
import Venta from "./Componentes/Venta/Venta";
/*PL*/
/*import Venta from "./Componentes/Escaners/Venta.js";*/
function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        {" "}
        <NavBar />{" "}
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />{" "}
          <Route path="/Escaners" element={<Escaners />} />{" "}
          <Route path="/comprar" element={<Comprar />} />
          <Route path="/venta" element={<Venta />} />
          <Route path="/Portatiles" element={<Portatil />} />{" "}
          <Route path="/Pcescritorio" element={<PCescritorio />} />{" "}
          <Route path="/Impresoras" element={<Impresoras />} />{" "}
          <Route path="/contactos" element={<Contactanos />} />{" "}
          {/*<Route path="/venta" element={<Venta />} />*/}{" "}
        </Routes>{" "}
        <Footer />{" "}
      </BrowserRouter>{" "}
    </div>
  );
}
export default App;
