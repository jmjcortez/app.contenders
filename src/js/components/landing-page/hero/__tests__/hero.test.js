import React from 'react';
import Hero from '../hero.component';
import { shallow } from 'enzyme';

describe('Hero test', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<Hero />);
        
        expect(component).toMatchSnapshot();
    });
});