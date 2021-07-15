import { shallow } from 'enzyme';
import React from 'react';
import FetchData from '../../components/FetchData';
import mockAxios from 'axios'

jest.mock("axios");


describe('Given FetchData Component',() => {

    test("Check State",async () =>{
        let component = shallow(<FetchData/>);
        // return component.instance().useEffect().then((data) => console.log(data))
        let matchState = {
            name:'alpha',
            error:null,
            userId:'',
            list:[]
        }
        expect(component.state()).toEqual(matchState)
    })


    test("Check Props", () => {
        let component = shallow(<FetchData/>)
        expect(component.find('input').props()).toEqual({type:'text',value:'alpha'})
    })

    test("mock axios test",async () => {
        const component = shallow(<FetchData/>);
        jest.spyOn(mockAxios,'default').mockResolvedValue({
            data:{
                userId:111
            }
        })
        // console.log("State Before >>",component.state());
        return component.instance().loadData().then(() => {
        // console.log("State after >>",component.state());
            expect(component.state().userId).toBe(111);
        })
    })


})