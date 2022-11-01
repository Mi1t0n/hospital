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

    // fetch(`https://6336b69865d1e8ef2671a820.mockapi.io/meetings/1`,{
    //     method:'PUT',
    //     headers:{ 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         "patients": [
    //             {
    //                 "fullName": "Cassandra Mraz DVM",
    //                 "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/279.jpg",
    //                 "amount": "151",
    //                 "appointmentDate": "2022-10-28T23:31:38.724Z",
    //                 "department": "Shanahanburgh",
    //                 "serialNumber": "7VZH5UMQCG"
    //             }
    //         ]
    //     })
    // })

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