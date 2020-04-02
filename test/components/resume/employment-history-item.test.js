import React from 'react';
import { shallow } from 'enzyme';
import EmploymentHistoryItem from 'components/resume/employment-history-item';

describe('EmploymentHistoryItem', () => {
  let props = {
    companyName: "Paddy's Pub",
    city: 'Philadelphia',
    state: 'Pennsylvania',
    jobTitle: 'Bartender',
    startYear: '2001',
    endYear: '2013'
  }

  it('renders EmploymentHistoryItem', () => {
    let wrapper = shallow(<EmploymentHistoryItem {...props} />)

    let jobCol = wrapper.find('div.col-md-7')
    let jobList = jobCol.childAt(0)
    let jobNameAndLocation = jobList.childAt(0)
    expect(jobNameAndLocation).toHaveText("Paddy's Pub: Philadelphia, Pennsylvania")

    let jobTitle = jobList.childAt(1)
    expect(jobTitle).toHaveText('Bartender')

    let jobYearCol = wrapper.find('div.col-md-3')
    let jobYearList = jobYearCol.childAt(0)
    let jobYears = jobYearList.childAt(0)
    expect(jobYears).toHaveText('2001 - 2013')
  });
});
