import {Routes} from "react-router-dom";
import PatientRoutes from "./PatientRoutes";

const DoctorRoutes = () =>
    (<>
        <PatientRoutes/>
        <Routes>
        </Routes>
    </>)

export default DoctorRoutes