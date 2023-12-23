import { JobDate } from 'constants/types';

export const showMonthAndYear = (date: Date, length: 'short' | 'long', includeDay: boolean) => {
  let opts: any = {
    month: 'long',
    year: 'numeric',
  };
  if (includeDay) {
    opts = { ...opts, day: 'numeric'}
  };

  return date.toLocaleDateString('en-us', opts);
};

export const formatJobDate = (date: JobDate, length: 'short' | 'long', includeDay = false, capitalize = false) => {
  const dateString = date instanceof Date ? showMonthAndYear(date, length, includeDay) : date;
  return capitalize ? dateString.toUpperCase() : dateString;
}