import React from "react";
import { mount, shallow } from "enzyme";
import Nav from "../../components/Nav";
import { Navbar } from "react-bootstrap";


describe("Given Nav", () => {

  test("Match Nav Snapshot", () => {
      const wrapper = shallow(<Nav/>);
      expect(wrapper).toMatchSnapshot();
  })  

  test("Title should render properly", () => {
        const wrapper = shallow(<Nav/>);
        expect(wrapper.contains(<Navbar.Brand>React Unit Testing (Jest/Enzyme)</Navbar.Brand>)).toBe(true);
  });
});
