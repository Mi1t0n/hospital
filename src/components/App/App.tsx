import style from './App.module.scss';
import {useAppSelector} from 'hooks/reduxHooks';
import Authentication from './Authentication/Authentication';
import useCheckAuthStatus from 'hooks/useCheckAuthStatus';
import {useGetCurrentUserQuery} from "redux/hospitalApi";
import {lazy, Suspense} from "react";

const Header = lazy(() => import('./Header/Header'))
const SideBar = lazy(() => import('./Navigation/SideBar'))
const RoutesPack = lazy(() => import('./RoutesPack/RoutesPack'))

const App = () => {
    const [checkingAuth] = useCheckAuthStatus()
    const {serialNumber} = useAppSelector(state => state.user)
    const {isLoading} = useGetCurrentUserQuery(serialNumber, {skip: !serialNumber})

    if (checkingAuth || isLoading) return null;
    if (!serialNumber) return <Authentication/>;

    return (
        <Suspense fallback={<p> Loading...</p>}>
            <div className={style.app}>
                <Header/>
                <SideBar/>
                <RoutesPack/>
            </div>
        </Suspense>
    );
};

export default App;