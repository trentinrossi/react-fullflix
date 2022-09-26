import Menu from "../Menu";
import Footer from "../Footer";
import style from "./PageTemplate.module.scss";

interface IMainProps {
    children?: any
}

function PageTemplate(props: IMainProps) {
    return (
        <>
            <Menu/>
            <div id="content" className={style.Content}>
                {props.children}
            </div>
            <Footer/>
        </>
    )
}

export default PageTemplate;
