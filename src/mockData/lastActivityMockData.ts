import delay from "utils/delay";
import doctorsLogo from "assets/lastActivity/doctors.svg";
import randomValueBetween from "utils/randomValueBetween";
import nursesLogo from "assets/lastActivity/nurses.svg";
import patientsLogo from "assets/lastActivity/patients.svg";
import pharmacustsLogo from "assets/lastActivity/pharmacusts.svg";


const LastActivityMockData = () => {
    const fakeResponse: any[] = [
        {title: 'Doctors', logo: doctorsLogo, count: randomValueBetween(500, 2000)},
        {title: 'Nurses', logo: nursesLogo, count: randomValueBetween(300, 1500)},
        {title: 'Patients', logo: patientsLogo, count: randomValueBetween(4000, 8000)},
        {title: 'Pharmacists', logo: pharmacustsLogo, count: randomValueBetween(100, 500)},
    ]
    return delay(3000, {blocksValue:fakeResponse})
}
export default LastActivityMockData