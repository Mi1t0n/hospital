import {Routes} from "react-router-dom";
import {lazy, Suspense} from 'react'

const PatientRoutes = lazy(() => import("./PatientRoutes"))
const DoctorRoutes = () =>
    (<Suspense fallback={<div>Loading . . .</div>}>
        <Routes>
        </Routes>
        <PatientRoutes/>
    </Suspense>)

export default DoctorRoutes