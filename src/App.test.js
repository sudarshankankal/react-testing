import React from 'react'
import App from './App'
import { mount, shallow } from 'enzyme'

describe('Given App component',() => {

   test("save snapshot", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  })

  test("Nav is rendered properly", () => {
    const wrapper = shallow(<App/>);
    const nav = wrapper.find("Nav").exists();
    expect(nav).toBe(true);
  })

  test("Landing Page is rendered properly", () => {
    const wrapper = shallow(<App/>);
    const landingPage = wrapper.find("LandingPage").exists();
    expect(landingPage).toBe(true);
  })

})

