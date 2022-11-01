import {Route, Routes} from "react-router-dom";
import pagesPaths from "interfaces/enums/pagesPaths";
import {lazy, Suspense} from 'react'

const AllUsers = lazy(() => import("../../pages/AllUsers/AllUsers"))
const PatientRoutes = lazy(() => import("./PatientRoutes"))
const Reports = lazy(() => import("../../pages/Reports/Reports"))

const AdministratorRoutes = () =>
    (<Suspense fallback={<div>Loading . . .</div>}>
        <Routes>
            <Route element={<AllUsers/>} path={pagesPaths.AllUsers}/>
            <Route element={<Reports/>} path={pagesPaths.Reports}/>
        </Routes>
        <PatientRoutes/>
    </Suspense>)

export default AdministratorRoutes