import React from 'react';
import {shallow} from 'enzyme';

import ColdandHot from './coldandhot';

// this one is ok
describe('<ColdandHot />', () => {
    it ('Renders the component without crashing', () => {
        shallow(<ColdandHot />);
    });
});