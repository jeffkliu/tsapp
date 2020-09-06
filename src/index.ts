import { User } from './User';
import { Company } from './Company';

import { CustomMap } from './CustomMap';
import { company } from 'faker';

const user = new User();
const company1 = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company1);
