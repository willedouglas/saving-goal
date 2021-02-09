import {
  formatValue,
  unformatValue,
} from '@helpers/format';

describe('Format', () => {
  it('should format currency values', () => {
    expect(formatValue(0)).toBe(0);
    expect(formatValue(81726)).toBe('81,726.00');
    expect(formatValue(1)).toBe('1.00');
    expect(formatValue('1')).toBe('1.00');
    expect(formatValue(3.2)).toBe('3.20');
    expect(formatValue(-1)).toBe('-1.00');
    expect(formatValue(-1, { absoluteOnly: true })).toBe('1.00');
  });

  it('should remove currency values format', () => {
    expect(unformatValue(0)).toBe(0);
    expect(unformatValue('81,726.00')).toBe(81726);
    expect(unformatValue('1.00')).toBe(1);
    expect(unformatValue('3.20')).toBe(3.2);
    expect(unformatValue('-1.00')).toBe(-1);
    expect(unformatValue('-1.00', { absoluteOnly: true })).toBe(1);
  });
});