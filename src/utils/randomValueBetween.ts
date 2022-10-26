import {faker} from '@faker-js/faker';

const randomValueBetween = (min = -9999, max = 9999) =>
	faker.datatype.number({'min': min, 'max': max});

export default randomValueBetween;