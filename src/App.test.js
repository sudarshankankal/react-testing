import React from 'react'
import App from './App'
import { mount, shallow } from 'enzyme'

describe('Given App component',() => {

  test("PostList is rendered properly", () => {
    const component = shallow(<App/>);
    const postList = component.find("PostList").exists();
    expect(postList).toBe(true);
  })

  test("PostDetail is rendered properly", () => {
    const component = shallow(<App/>);
    const postDetail = component.find("PostDetail").exists();
    expect(postDetail).toBe(true);
  })

  // test("save snapshot", () => {
  //   const component = shallow(<App/>);
  //   expect(component).toMatchSnapshot();
  // })

})

