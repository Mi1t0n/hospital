import {FC} from "react";
import style from "./Button.module.scss";
import {IButton} from "interfaces/IComponents/IButton";

const Button: FC<IButton> = ({myClassName = style.button, text = 'Submit', ...rest}) => {
    return <button {...rest} className={myClassName}>{text}</button>
}

export default Button;
