import React from 'react';
import { shallow } from 'enzyme';

import Gameform from './gameform';

//what is the problem with this test ?
describe('<Gameform /', () => {
    it ('Renders component without crashing', () => {
        shallow(<Gameform />);
    });
});