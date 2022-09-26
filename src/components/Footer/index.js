import {FooterBase} from './styles';

function Footer() {
    return (
        <FooterBase>
            <a href="src/components/Footer/index">
                <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura"/>
            </a>
            <p>
                Orgulhosamente criado durante a
                {' '}
                <a href="src/components/Footer/index">
                    Imersão React da Alura
                </a>
            </p>
        </FooterBase>
    );
}

export default Footer;
