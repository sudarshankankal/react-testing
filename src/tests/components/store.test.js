import React from 'react'
import { mount, shallow } from 'enzyme'
import { StoreProvider } from '../../components/store'

describe('given context store',() => {
    test("check postlist state", () => {
        const component = shallow(<StoreProvider/>)
        expect(component.children()).toEqual({});
    })
})