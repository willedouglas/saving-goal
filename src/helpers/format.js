import numeral from 'numeral';

export const unformatValue = (value, { absoluteOnly } = {}) => {
  if (!value) return null;
  const currentValue = numeral._.stringToNumber(String(value));
  return absoluteOnly ? Math.abs(currentValue) : currentValue;
}

export const formatValue = (value, { absoluteOnly } = {}) => {
  if (!value) return null;
  const currentValue = absoluteOnly ?
    Math.abs(numeral(value).value()) : numeral(value).value();
  const formattedValue = numeral(currentValue).format('0,0.00');
  return formattedValue;
}
