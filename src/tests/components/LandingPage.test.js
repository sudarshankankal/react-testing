import React from "react";
import { shallow } from "enzyme";
import LandingPage from "../../pages/LandingPage";

describe("Given LandingPage", () => {
  
  test("Check Snapshot for LandingPage", () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });

  test("class box should render properly",() => {
      const wrapper = shallow(<LandingPage />);
      expect(wrapper.hasClass('box')).toBe(true);
  })

  test("it should render SignIn/SignUp/List", () => {
    const wrapper = shallow(<LandingPage />);
    const Login = wrapper.find("Login").exists();
    const SignUp = wrapper.find("SignUp").exists();
    const list = wrapper.find("FetchData").exists();
    expect(Login).toBe(true);
    expect(SignUp).toBe(true);
    expect(list).toBe(true);
  })
});


