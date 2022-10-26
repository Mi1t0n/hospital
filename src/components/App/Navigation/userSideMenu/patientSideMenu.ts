import profileLogo from 'assets/userMenu/profile.svg';
import {faker} from "@faker-js/faker";

const patientSideMenu = [
    {
        title    : 'Pages',
        subBlocks: [
            {
                title    : 'Pages', logo: profileLogo, id: faker.random.numeric(6),
                subBlocks: [
                    {title: 'Main Page', routePath: '/mainPage'},
                    {title: 'Lorem', routePath: '/lorem'},
                    {title: 'Lorem', routePath: '/lorem'},
                ]
            }
        ]
    },
    {
        title    : 'Lorem',
        subBlocks: [
            {
                title    : 'Lorem', logo: profileLogo, id: faker.random.numeric(6),
                subBlocks: [
                    {title: 'Lorem', routePath: '/lorem'},
                    {title: 'Lorem', routePath: '/lorem'},
                    {title: 'Lorem', routePath: '/lorem'},
                ]
            }
        ]
    },
];

export default patientSideMenu