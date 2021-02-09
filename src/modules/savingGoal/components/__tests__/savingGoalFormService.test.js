import { calculateMonthlyDeposit, isValidDate } from '../savingGoalFormService';

const mockTotalAmount = () => 12000;
const mockReachGoalBy = () => '2022-01-01';

const mockExpectedMonthsDifference = () => 12;
const mockExpectedMonthlyAmount = () => 1000;
const mockAnotherExpectedMonthsDifference = () => 0;
const mockAnotherExpectedMonthlyAmount = () => 0;

describe('SavingGoalFormService', () => {
  it('should calculate month deposit when months difference', () => {
    Date.now = jest.fn(() => new Date('2021-01-01 23:59:59'));

    expect(calculateMonthlyDeposit(mockTotalAmount(), mockReachGoalBy())).toEqual({
      monthsDifference: mockExpectedMonthsDifference(),
      monthlyAmount: mockExpectedMonthlyAmount(),
    });
  });

  it('should calculate month deposit when no months difference', () => {
    Date.now = jest.fn(() => new Date('2022-01-01 23:59:59'));

    expect(calculateMonthlyDeposit(mockTotalAmount(), mockReachGoalBy())).toEqual({
      monthsDifference: mockAnotherExpectedMonthsDifference(),
      monthlyAmount: mockAnotherExpectedMonthlyAmount(),
    });
  });

  it('should valid date when not is after', () => {
    Date.now = jest.fn(() => new Date('2021-01-01 23:59:59'));
    expect(isValidDate(mockReachGoalBy())).toBeTruthy();
  });

  it('should not is valid date when is after', () => {
    Date.now = jest.fn(() => new Date('2023-01-01 23:59:59'));
    expect(isValidDate(mockReachGoalBy())).toBeFalsy();
  });
});