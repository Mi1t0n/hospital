import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from 'react'
import pagesPaths from "interfaces/enums/pagesPaths";

const PatientRoutes = lazy(() => import("./PatientRoutes"))
const AdmissionReport = lazy(() => import("../../pages/AdmissionReport/AdmissionReport"))

const DoctorRoutes = () =>
    (<Suspense fallback={<div>Loading . . .</div>}>
        <Routes>
            <Route element={<AdmissionReport/>} path={pagesPaths.AdmissionReport}/>
        </Routes>
        <PatientRoutes/>
    </Suspense>)

export default DoctorRoutes