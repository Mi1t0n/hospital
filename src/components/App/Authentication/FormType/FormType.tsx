import style from './FormType.module.scss';
import {NavLink} from 'react-router-dom';
import {IFormType} from "interfaces/IComponents/IFormType";
import authenticationPaths from "interfaces/enums/authenticationPaths";


const FormType = ({isLoading}: IFormType) =>
    (<nav className={style.formType}>
        <NavLink to={authenticationPaths.LogIn} aria-disabled={isLoading}>
            <h3>LogIn</h3>
        </NavLink>

        <NavLink to={authenticationPaths.SignUp} aria-disabled={isLoading}>
            <h3>SignUp</h3>
        </NavLink>
    </nav>);

export default FormType;
