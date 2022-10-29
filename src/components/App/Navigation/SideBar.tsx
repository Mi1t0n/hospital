import style from './SideBar.module.scss';
import MenuBlock from './TitleBlocks/TitleBlocks';
import Logo from "./Logo/Logo";
import patientSideMenu from "./userSideMenu/patientSideMenu";
import {useAppSelector} from "hooks/reduxHooks";
import administratorSideMenu from "./userSideMenu/administratorSideMenu";
import doctorSideMenu from "./userSideMenu/doctorSideMenu";
import {IuserSideBar} from "interfaces/IComponents/ISideBar";
import {useGetCurrentUserQuery} from "redux/hospitalApi";
import useMatchMedia from "hooks/useMatchMedia";
import arrow from "assets/arrow.svg";
import {useState} from "react";


const userSideBar: IuserSideBar = {
    Patient      : patientSideMenu,
    Doctor       : doctorSideMenu,
    Administrator: administratorSideMenu
}

const SideBar = () => {
    const {isTablet, isMobile} = useMatchMedia()
    const [status, setStatus] = useState<boolean>(false)

    const serialNumber = useAppSelector(state => state.user.serialNumber)
    const {data: currentUser} = useGetCurrentUserQuery(serialNumber)
    if (!currentUser) return null

    const targetedSideBar = userSideBar[currentUser[0].userType]

    return (
        <nav className={style.sideBar} data-status={status}>
            {
                (isTablet || isMobile) &&
                <img src={arrow} alt="arrow"
                     className={style.toggleArrow}
                     onClick={() => setStatus(!status)}

                />
            }
            <Logo/>
            <MenuBlock data={targetedSideBar}/>
        </nav>
    );
}

export default SideBar;
