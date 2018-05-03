import React from 'react';
import { shallow } from 'enzyme';
import TaxCalculator from './TaxCalculator';

describe('Tax Calculator', () => {

  let wrapper;

  it('should render without failure', () => {
    wrapper = shallow(<TaxCalculator />);
  })

})