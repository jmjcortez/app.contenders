import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import { Login } from '../login.component';

describe('Login component test', () => {
    afterEach(() => {
        window.localStorage.clear();
    });

    it('should render correctly with no props', () => {
        const component = shallow(<Login />);
        
        expect(component).toMatchSnapshot();
    });
});