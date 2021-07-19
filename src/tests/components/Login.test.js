import React from 'react'
import {shallow,mount} from 'enzyme'
import { Login } from '../../components/Login';


describe('Given Login Component',() => {

    test('Should render properly',async () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper).toMatchSnapshot();
    })

    test("render email input tag",() => {
        const wrapper = shallow(<Login/>);
        const isPresent = wrapper.find('input[name="email"]').exists();
        expect(isPresent).toBe(true);

    })
})
