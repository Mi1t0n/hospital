import {Route, Routes} from "react-router-dom";
import pagesPaths from "interfaces/enums/pagesPaths";
import {lazy, Suspense} from 'react'

const Profile = lazy(() => import("../../pages/Profile/Profile"))
const MainPage = lazy(() => import("../../pages/MainPage/MainPage"))

const PatientRoutes = () =>
    (<Suspense fallback={<div>Loading . . .</div>}>
        <Routes>
            <Route element={<Profile/>} path={pagesPaths.Profile}/>
            <Route element={<MainPage/>} path={pagesPaths.MainPage}/>
        </Routes>
    </Suspense>)

export default PatientRoutes