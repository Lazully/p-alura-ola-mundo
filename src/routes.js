import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "Componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToTop/>

      <Menu />

      <Routes>
        <Route element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post/>}/>

        <Route path="*" element={<NaoEncontrada/>} />

      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;