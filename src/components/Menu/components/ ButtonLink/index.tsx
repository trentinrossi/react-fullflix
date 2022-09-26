import style from "../../Menu.module.scss";
import React from "react";

interface IButtonProps {
  children?: React.ReactNode
}

function ButtonLink(props: IButtonProps) {
  return (
    <a className={style.ButtonLink} >
        {props.children}
    </a>
  );
}

export default ButtonLink;
