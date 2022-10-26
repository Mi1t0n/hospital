import logo from 'assets/logo.svg';
import style from './Logo.module.scss';
import {NavLink} from "react-router-dom";
import pagesPaths from "interfaces/enums/pagesPaths";

const Logo = () =>
    (<NavLink className={style.logo} to={pagesPaths.MainPage}>
        <img src={logo} alt={'logo'}/>
        <p>Hospital</p>
    </NavLink>);
export default Logo;