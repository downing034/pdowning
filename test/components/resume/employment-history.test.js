import React from 'react';
import { shallow } from 'enzyme';
import EmploymentHistory from 'components/resume/employment-history';

describe('EmploymentHistory', () => {
  it('renders EmploymentHistory', () => {
    let wrapper = shallow(<EmploymentHistory />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'EMPLOYMENT HISTORY')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)

    let histories = wrapper.find('EmploymentHistoryItem')
    expect(histories).toHaveLength(7)

    let teamsnapEngineer = paddingContainer.childAt(0)
    expect(teamsnapEngineer).toHaveProp('companyName', 'TeamSnap')
    expect(teamsnapEngineer).toHaveProp('jobTitle', 'Software Engineer')

    let granicusEngineer = paddingContainer.childAt(1)
    expect(granicusEngineer).toHaveProp('companyName', 'Granicus')
    expect(granicusEngineer).toHaveProp('jobTitle', 'Software Engineer')

    let granicusQa = paddingContainer.childAt(2)
    expect(granicusQa).toHaveProp('companyName', 'Granicus')
    expect(granicusQa).toHaveProp('jobTitle', 'Quality Assurance Engineer')

    let spsQa = paddingContainer.childAt(3)
    expect(spsQa).toHaveProp('companyName', 'SPS Commerce')
    expect(spsQa).toHaveProp('jobTitle', 'Quality Assurance Analyst')

    let spsLead = paddingContainer.childAt(4)
    expect(spsLead).toHaveProp('companyName', 'SPS Commerce')
    expect(spsLead).toHaveProp('jobTitle', 'Support Center Lead')

    let spsSeniorCoa = paddingContainer.childAt(5)
    expect(spsSeniorCoa).toHaveProp('companyName', 'SPS Commerce')
    expect(spsSeniorCoa).toHaveProp('jobTitle', 'Senior Customer Operations Analyst')

    let spsCoa = paddingContainer.childAt(6)
    expect(spsCoa).toHaveProp('companyName', 'SPS Commerce')
    expect(spsCoa).toHaveProp('jobTitle', 'Customer Operations Analyst')
  });
});
