import profileLogo from 'assets/userMenu/profile.svg';
import infoLogo from 'assets/userMenu/info.svg';
import paintLogo from 'assets/userMenu/paint.svg';
import {faker} from "@faker-js/faker";
import patientSideMenu from "./patientSideMenu";

const administratorSideMenu = [
    ...patientSideMenu,
    {
        title    : 'Admin Menu',
        subBlocks: [
            {
                title    : 'Users', logo: profileLogo, id: faker.random.numeric(6),
                subBlocks: [
                    {title: 'All our users', routePath: '/allUsers'},
                    {title: 'Lorem', routePath: '/0'},
                    {title: 'Lorem', routePath: '/0'},
                ]
            },
            {
                title    : 'Doctors', logo: infoLogo, id: faker.random.numeric(6),
                subBlocks: [
                    {title: 'Reports', routePath: '/reports'},
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
export default administratorSideMenu