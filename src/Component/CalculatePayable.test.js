import {calculateTaxPayable} from './CalculatePayable'

describe('calculation of taxes by tier', () => {

  it('should give me the total amount of tax payable, hitting 2%', () => {
    const result = calculateTaxPayable(30000)
    expect(result).toBe(200)
  })

  it('should give me the total amount of tax payable, hitting 3.5%', () => {
    const result = calculateTaxPayable(35000)
    expect(result).toBe(375)
  })

})