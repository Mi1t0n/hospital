import style from './ProfileNav.module.scss';
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "hooks/reduxHooks";
import {signOut} from "redux/slices/authSlice/authSlice";

const ProfileNav = () => {
    const dispatch = useAppDispatch()
    const signOutHandler = () => dispatch(signOut())
    const {serialNumber} = useAppSelector(state => state.user);
    return (
        <nav className={style.navButtons}>
            <NavLink to={`/profile/${serialNumber}`}>My Profile</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <button onClick={signOutHandler}>Sign Out</button>
        </nav>
    );
};


export default ProfileNav;
