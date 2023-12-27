import { JobDate, MonthFormat } from 'constants/types';

export const showMonthAndYear = (date: Date, monthLength: MonthFormat, includeDay: boolean) => {
  let opts: any = {
    month: monthLength,
    year: 'numeric',
  };
  if (includeDay) {
    opts = { ...opts, day: 'numeric'}
  };

  return date.toLocaleDateString('en-us', opts);
};

export const formatJobDate = (date: JobDate, monthLength: MonthFormat, includeDay = false, capitalize = false) => {
  const dateString = date instanceof Date ? showMonthAndYear(date, monthLength, includeDay) : date;
  return capitalize ? dateString.toUpperCase() : dateString;
}