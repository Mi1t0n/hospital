import {Route, Routes} from "react-router-dom";
import pagesPaths from "interfaces/enums/pagesPaths";
import {lazy, Suspense} from 'react'

const AllUsers = lazy(() => import("../../pages/AllUsers/AllUsers"))
const DoctorRoutes = lazy(() => import("./DoctorRoutes"))

const AdministratorRoutes = () =>
    (<Suspense fallback={<div>Loading . . .</div>}>
        <Routes>
            <Route element={<AllUsers/>} path={pagesPaths.AllUsers}/>
        </Routes>
        <DoctorRoutes/>
    </Suspense>)

export default AdministratorRoutes