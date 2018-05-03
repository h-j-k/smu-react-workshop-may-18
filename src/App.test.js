import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App class', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has 2 number input components', () => {
    expect(wrapper.find('NumberInput').length).toBe(2)
  });

  it('has 1 button', () => {
    expect(wrapper.find('button').length).toBe(1)
  });


})