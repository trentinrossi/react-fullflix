import React from "react";
import PageTemplate from "../../../components/PageTemplate";
import {Link} from "react-router-dom";

function CadastroCategoria() {
    return (
        <PageTemplate>
            <h1>Cadastro Categoria</h1>

            <Link to="/">Ir para home</Link>
        </PageTemplate>
    )
}

export default CadastroCategoria;
