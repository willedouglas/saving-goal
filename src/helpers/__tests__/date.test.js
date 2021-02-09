import {
  getMonth,
  getYear,
  getCurrentDate,
  addYear,
  addMonth,
  subtractMonth,
  getMonthsDifference,
  isBefore,
} from '@helpers/date';

const defaultMockDate = () => '2015-12-31'
const finalMockDate = () => '2016-08-01'
const anotherFinalMockDate = () => '2014-08-01'

describe('Date', () => {
  it('should get month from date', () => {
    const month = getMonth(defaultMockDate());
    expect(month).toBe('December');
  });

  it('should get year from date', () => {
    const year = getYear(defaultMockDate());
    expect(year).toBe('2015');
  });

  it('should get current date', () => {
    Date.now = jest.fn(() => new Date('2019-05-01 23:59:59'));
    const currentDate = getCurrentDate();
    expect(currentDate).toBe('2019-05-01');
  });

  it('should add year to date', () => {
    const nextYear = addYear(defaultMockDate());
    expect(nextYear).toBe('2016-12-31');
  });

  it('should add month to date', () => {
    const nextMonth = addMonth(defaultMockDate());
    expect(nextMonth).toBe('2016-01-31');
  });

  it('should subtract month to date', () => {
    const previousMonth = subtractMonth(defaultMockDate());
    expect(previousMonth).toBe('2015-11-30');
  });

  it('should get months difference between dates', () => {
    const difference = getMonthsDifference(defaultMockDate(), finalMockDate());
    expect(difference).toBe(7);
  });

  it('should not is before date', () => {
    const before = isBefore(defaultMockDate(), finalMockDate());
    expect(before).toBeFalsy();
  });

  it('should is before date', () => {
    const before = isBefore(defaultMockDate(), anotherFinalMockDate());
    expect(before).toBeTruthy();
  });
});