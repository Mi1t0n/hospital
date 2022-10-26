import style from './Links.module.scss';
import { NavLink} from "react-router-dom";
import {faker} from "@faker-js/faker";
import {FC} from "react";
import {ILinks} from "interfaces/IComponents/ISideBar";


const Links:FC<ILinks> = ({data}) => {
    const links = data.map(({title, routePath}) =>
        (
            <li key={faker.random.numeric(10)}>
                <NavLink to={routePath}>{title}</NavLink>
            </li>
        )
    )
    return (
        <ul className={style.links}>
            {links}
        </ul>
    );
}

export default Links;
