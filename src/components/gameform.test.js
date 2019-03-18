import React from 'react';
import { shallow } from 'enzyme';

import Gameform from './gameform';

describe('<Gameform /', () => {
    it ('Renders component without crashing', () => {
        shallow(<Gameform />);
    });
});