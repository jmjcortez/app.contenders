import React from 'react';
import { FieldInput } from '../index';
import { shallow } from 'enzyme';

describe('Field input test', () => {
    it('should render correctly with no props with input prop', () => {
        const input = {
            value: 'test'
        }
        const component = shallow(<FieldInput input={input} />);
        
        expect(component).toMatchSnapshot();
    });
});