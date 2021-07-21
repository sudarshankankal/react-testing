import React from "react";
import { shallow } from "enzyme";
import { SignUp } from "../../components/SignUp";

describe("Given Sign Up", () => {
  const wrapper = shallow(<SignUp />);

  test("Sign Up Form Should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render full name input", () => {
    const isPresent = wrapper.find('input[name="fullName"]').exists();
    expect(isPresent).toBe(true);
  });

  test("should render email input", () => {
    const isPresent = wrapper.find('input[name="email"]').exists();
    expect(isPresent).toBe(true);
  });

  test("should render Phone Number input", () => {
    const isPresent = wrapper.find('input[name="phone"]').exists();
    expect(isPresent).toBe(true);
  });

  test("should render password input", () => {
    const isPresent = wrapper.find('input[name="password"]').exists();
    expect(isPresent).toBe(true);
  });

  test("should render submit button", () => {
    const isPresent = wrapper.find('Button[type="submit"]').exists();
    expect(isPresent).toBe(true);
  });

  test("Default value for all the field should be empty", () => {
    const fullName = wrapper.find('input[name="fullName"]').prop("value");
    const email = wrapper.find('input[name="email"]').prop("value");
    const phone = wrapper.find('input[name="phone"]').prop("value");
    const password = wrapper.find('input[name="password"]').prop("value");

    expect(fullName).toBe("");
    expect(email).toBe("");
    expect(phone).toBe("");
    expect(password).toBe("");
  });

  test("on enter full name state should update", () => {
    wrapper.find('input[name="fullName"]').simulate("change", {
      target: {
        value: "John Doe",
      },
    });

    const name = wrapper.find('input[name="fullName"]').prop("value");
    expect(name).toBe("John Doe");
  });

  test("on enter email state should update", () => {
    wrapper.find('input[name="email"]').simulate("change", {
      target: {
        value: "alpha@email.com",
      },
    });

    const email = wrapper.find('input[name="email"]').prop("value");
    expect(email).toBe("alpha@email.com");
  });

  test("on enter Phone number state should update", () => {
    wrapper.find('input[name="phone"]').simulate("change", {
      target: {
        value: "1234567890",
      },
    });

    const phone = wrapper.find('input[name="phone"]').prop("value");
    expect(phone).toBe("1234567890");
  });

  test("on enter password state should update", () => {
    wrapper.find('input[name="password"]').simulate("change", {
      target: {
        value: "alpha@123",
      },
    });

    const password = wrapper.find('input[name="password"]').prop("value");
    expect(password).toBe("alpha@123");
  });
});
