import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import CadastroVideo from "./pages/Cadastro/Video";
import PageNotFound from "./pages/not-found";
import CadastroCategoria from "./pages/Cadastro/Categoria";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/cadastro/video" element={<CadastroVideo/>}/>
            <Route path="/cadastro/categoria" element={<CadastroCategoria/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </Router>
);
