import { showMonthAndYear, formatJobDate } from 'components/helpers/dateFormatters';

describe('showMonthAndYear', () => {
  const date = new Date(2024, 0, 15); // January 15, 2024

  it('formats with short month', () => {
    const result = showMonthAndYear(date, 'short', false);
    expect(result).toBe('Jan 2024');
  });

  it('formats with long month', () => {
    const result = showMonthAndYear(date, 'long', false);
    expect(result).toBe('January 2024');
  });

  it('includes day when requested', () => {
    const result = showMonthAndYear(date, 'short', true);
    expect(result).toBe('Jan 15, 2024');
  });

  it('includes day with long month', () => {
    const result = showMonthAndYear(date, 'long', true);
    expect(result).toBe('January 15, 2024');
  });
});

describe('formatJobDate', () => {
  const date = new Date(2023, 5, 1); // June 1, 2023

  it('formats a Date object with short month', () => {
    const result = formatJobDate(date, 'short');
    expect(result).toBe('Jun 2023');
  });

  it('formats a Date object with long month', () => {
    const result = formatJobDate(date, 'long');
    expect(result).toBe('June 2023');
  });

  it('formats a Date object with day included', () => {
    const result = formatJobDate(date, 'short', true);
    expect(result).toBe('Jun 1, 2023');
  });

  it('returns string dates as-is', () => {
    const result = formatJobDate('Present', 'short');
    expect(result).toBe('Present');
  });

  it('capitalizes Date output when requested', () => {
    const result = formatJobDate(date, 'short', false, true);
    expect(result).toBe('JUN 2023');
  });

  it('capitalizes string dates when requested', () => {
    const result = formatJobDate('Present', 'short', false, true);
    expect(result).toBe('PRESENT');
  });

  it('does not capitalize by default', () => {
    const result = formatJobDate(date, 'long');
    expect(result).not.toBe(result.toUpperCase());
  });
});
