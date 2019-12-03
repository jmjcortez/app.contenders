import React from 'react';
import LandingPage from '../landing-page.component';
import { shallow } from 'enzyme';

describe('Landing page test', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<LandingPage />);
        
        expect(component).toMatchSnapshot();
    });

    it('should redirect when user is authenticated', () => {
        
    });
});