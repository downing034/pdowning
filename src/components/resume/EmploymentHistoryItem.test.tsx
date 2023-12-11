import React from 'react';
import { shallow } from 'enzyme';
import { EmploymentHistoryItem } from './';
import { EmploymentHistory } from 'constants/types';

describe('EmploymentHistoryItem', () => {
  let props: EmploymentHistory = {
    companyName: "Paddy's Pub",
    city: 'Philadelphia',
    state: 'PA',
    jobTitle: 'Bartender',
    startYear: '2001',
    endYear: '2013'
  }

  test('renders EmploymentHistoryItem', () => {
    let wrapper = shallow(<EmploymentHistoryItem {...props} />)

    let jobCol = wrapper.find('div.col-md-7')
    let jobList = jobCol.childAt(0)
    let jobNameAndLocation = jobList.childAt(0)
    expect(jobNameAndLocation.text()).toBe("Paddy's Pub: Philadelphia, PA")

    let jobTitle = jobList.childAt(1)
    expect(jobTitle.text()).toBe('Bartender')

    let jobYearCol = wrapper.find('div.col-md-3')
    let jobYearList = jobYearCol.childAt(0)
    let jobYears = jobYearList.childAt(0)
    expect(jobYears.text()).toBe('2001 - 2013')
  });
});
