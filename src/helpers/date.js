import moment from 'moment';

export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

export const getMonth = date => moment(date).format('MMMM');

export const getYear = date => moment(date).format('Y');

export const getCurrentDate = () => moment().format(DEFAULT_DATE_FORMAT);

export const addYear = date => moment(date).add(1, 'year').format(DEFAULT_DATE_FORMAT);

export const addMonth = date => moment(date).add(1, 'months').format(DEFAULT_DATE_FORMAT);

export const subtractMonth = date => moment(date).subtract(1, 'months').format(DEFAULT_DATE_FORMAT);

export const getMonthsDifference = (initialDate, finalDate) => moment(finalDate).diff(initialDate, "months");

export const isAfter = (initialDate, finalDate) => moment(initialDate).isAfter(finalDate);
