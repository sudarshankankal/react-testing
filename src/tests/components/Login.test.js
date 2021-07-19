import React from 'react'
import {shallow,mount} from 'enzyme'
import { Login } from '../../components/Login';


describe('Given Login Component',() => {
    
    const wrapper = shallow(<Login/>);

    test('Should render properly',async () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("should render email input",() => {
        const isPresent = wrapper.find('input[name="email"]').exists();
        expect(isPresent).toBe(true);
    })

    test("should render password input",() => {
        const isPresent = wrapper.find('input[name="password"]').exists();
        expect(isPresent).toBe(true);
    })

    test("should render submit button",() => {
        const isPresent = wrapper.find('button[type="submit"]').exists();
        expect(isPresent).toBe(true);
    })

    test("Default value for both the field should be empty",() => {
        const email = wrapper.find('input[name="email"]').prop('value');
        const password = wrapper.find('input[name="password"]').prop('value');
        // console.log(`Email: ${email} Password: ${password}`);
        expect(email).toBe('');
        expect(password).toBe('');
    })

    test("on enter email value of the state should update",() => {
        // const wrapper = shallow(<Login/>);
        wrapper.find('input[name="email"]').simulate('change',{
            target: {
                value:'abc@email.com'
            }
        })

        const email = wrapper.find('input[name="email"]').prop('value');
        expect(email).toBe('abc@email.com'); 
    })

    test("on enter password state should be updated",() => {
        
        wrapper.find('input[name="password"]').simulate('change',{
            target:{
                value:'abc@123'
            }
        });

        const password = wrapper.find('input[name="password"]').prop('value');
        expect(password).toBe('abc@123');
    })


})
