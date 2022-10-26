import profileLogo from 'assets/userMenu/profile.svg';
import infoLogo from 'assets/userMenu/info.svg';
import paintLogo from 'assets/userMenu/paint.svg';
import {faker} from "@faker-js/faker";
import patientSideMenu from "./patientSideMenu";

const doctorSideMenu = [
    ...patientSideMenu,
    {
        title    : 'Lorem',
        subBlocks: [
            {
                title    : 'Lorem', logo: profileLogo, id: faker.random.numeric(6),
                subBlocks: [
                    {title: 'Lorem', routePath: '/0'},
                    {title: 'Lorem', routePath: '/0'},
                    {title: 'Lorem', routePath: '/0'},
                ]
            },
            {
                title    : 'Lorem', logo: infoLogo, id: faker.random.numeric(6),
                subBlocks: [
                    {title: 'Lorem', routePath: '/0'},
                    {title: 'Lorem', routePath: '/0'},
                ]
            },
            {
                title    : 'Lorem', logo: paintLogo, id: faker.random.numeric(6),
                subBlocks: [{title: 'Lorem', routePath: '/0'}]
            },
        ]
    },
];
export default doctorSideMenu