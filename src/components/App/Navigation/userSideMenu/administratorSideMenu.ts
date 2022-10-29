import profileLogo from 'assets/userMenu/profile.svg';
import infoLogo from 'assets/userMenu/info.svg';
import paintLogo from 'assets/userMenu/paint.svg';
import {faker} from "@faker-js/faker";
import doctorSideMenu from "./doctorSideMenu";

const administratorSideMenu = [
    ...doctorSideMenu,
    {
        title    : 'Admin Data',
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
export default administratorSideMenu