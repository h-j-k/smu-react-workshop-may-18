import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App class', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has 2 number input components', () => {
    expect(wrapper.find('NumberInput').length).toBe(3)
  });

  it('has 1 button', () => {
    expect(wrapper.find('button').length).toBe(1)
  });

  it('should calculate the sum of 3 inputs', () => {
    // setup of the test: the parameters
    wrapper.setState({first: 1, second: 2, third: 3})
    // do something
    wrapper.instance().calculate();
    // assert the result of the previous operation
    expect(wrapper.state('result')).toBe(6)
  })


})