import { shallow } from "enzyme";
import React from "react";
import FetchData from "../../components/FetchData";
import mockAxios from "axios";

jest.mock("axios");

describe("Given FetchData Component", () => {

  const matchResponse = [{body: "abc",id: 1,title: "Title1",userId: 1},{body: "abc2",id: 2,title: "Title2",userId: 2}]


  test("Check FetchData snapshot",() => {
    const component = shallow(<FetchData/>);
    expect(component).toMatchSnapshot();
  })

  test("Check State", () => {
    let component = shallow(<FetchData />);
    let matchState = {
      name: "alpha",
      error: null,
      userId: "",
      list: [],
    };
    expect(component.state()).toEqual(matchState);
  });


  test("Check Props", () => {
    let component = shallow(<FetchData loader={false} />);
    // console.log(component.props());
    expect(component.props().children.props.loader).toBe(false);
  });


  test("Check Posts api response data should have all the fields", () => {
    const component = shallow(<FetchData />);
   
    jest.spyOn(mockAxios, "default").mockResolvedValue({data: matchResponse});
    
    return component.instance().loadData()
      .then(() => {
        expect(component.state().list).toEqual(matchResponse);
      });
  });

 

  test("check function value is truthy",() => {
    const component = shallow(<FetchData/>);
    const value = component.instance().detectUser()
    expect(value).toBeTruthy();
  })
});
