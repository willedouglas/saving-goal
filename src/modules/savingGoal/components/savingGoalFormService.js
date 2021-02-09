import { getMonthsDifference, getCurrentDate, isAfter } from '@helpers/date';

export const calculateMonthlyDeposit = (totalAmount, reachGoalBy) => {
  const monthsDifference = getMonthsDifference(getCurrentDate(), reachGoalBy);
  const monthlyAmount = monthsDifference ? totalAmount / monthsDifference : 0;
  return { monthsDifference, monthlyAmount };
};

export const isValidDate = date => isAfter(date, getCurrentDate());
