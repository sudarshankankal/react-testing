import { shallow } from 'enzyme';
import React from 'react';
import FetchData from '../components/FetchData';



describe('Given FetchData Component',() => {

    test("Check State",async () =>{
        let component = shallow(<FetchData/>);
        // return component.instance().useEffect().then((data) => console.log(data))
        console.log(component.state())
        expect(component.state()).toEqual({name:'alpha'})
    })


    test("Check Props", () => {
        let component = shallow(<FetchData/>)
        // console.log(component.find('input').props());
        expect(component.find('input').props()).toEqual({type:'text',value:'alpha'})

    })
})