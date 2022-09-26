import logoImg from "../../assets/img/logo.png";
import style from "./Menu.module.scss";
import ButtonLink from "./components/ ButtonLink";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <nav className={style.Menu}>
            <Link to="/">
                <img className={style.Logo} src={logoImg} alt="Logo da FullFlix"/>
            </Link>
            <Link to="/cadastro/video">
                <ButtonLink>
                    Novo Vídeo
                </ButtonLink>
            </Link>
        </nav>
    );
}

export default Menu;
