import { MonthFormat } from 'constants/types';
import {
  showMonthAndYear,
  formatJobDate,
} from './';

describe('dateFormatters | showMonthAndYear', () => {
  const date = new Date('12/1/2023');

  let monthLength: MonthFormat = 'short';
  let includeDay = true;

  test('showMonthAndYear with short month text and include day', () => {
    const expectedDate = 'Dec 1, 2023';
    expect(showMonthAndYear(date, monthLength, includeDay)).toBe(expectedDate);
  });

  test('showMonthAndYear with long month text and exclude day', () => {
    monthLength = 'long';
    includeDay = false;

    const expectedDate = 'December 2023';
    expect(showMonthAndYear(date, monthLength, includeDay)).toBe(expectedDate);
  });
});

describe('dateFormatters | formatJobDate', () => {
  const date = new Date('12/1/2023');

  let monthLength: MonthFormat = 'short';
  let includeDay = true;
  let capitalize = true;

  test('formatJobDate with short month text and no other provided params', () => {
    const expectedDate = 'Dec 2023';
    expect(formatJobDate(date, monthLength)).toBe(expectedDate);
  });

  test('formatJobDate when date is current returns "current" string', () => {
    const currentJob = 'Current';
    const expectedDate = 'Current';
    expect(formatJobDate(currentJob, monthLength)).toBe(expectedDate);
  });

  test('formatJobDate with long month text, day included, and capitalized', () => {
    monthLength = 'long';
    const expectedDate = 'DECEMBER 1, 2023';
    expect(formatJobDate(date, monthLength, includeDay, capitalize)).toBe(expectedDate);
  });
});