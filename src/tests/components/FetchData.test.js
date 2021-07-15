import { shallow } from 'enzyme';
import React from 'react';
import FetchData from '../../components/FetchData';



describe('Given FetchData Component',() => {

    test("Check State",async () =>{
        let component = shallow(<FetchData/>);
        // return component.instance().useEffect().then((data) => console.log(data))
        let matchProps = {
            name:'alpha',
            error:null,
            age:'',
            list:[]
        }
        expect(component.state()).toEqual(matchProps)
    })


    test("Check Props", () => {
        let component = shallow(<FetchData/>)
        expect(component.find('input').props()).toEqual({type:'text',value:'alpha'})
    })


})