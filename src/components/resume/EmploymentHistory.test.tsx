import React from 'react';
import { shallow } from 'enzyme';
import { EmploymentHistory } from './';

describe('EmploymentHistory', () => {
  test('renders EmploymentHistory', () => {
    let wrapper = shallow(<EmploymentHistory />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'EMPLOYMENT HISTORY')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)

    let histories = wrapper.find('EmploymentHistoryItem')
    expect(histories).toHaveLength(8)

    let kavaLabsEngineer = paddingContainer.childAt(0)
    expect(kavaLabsEngineer).toHaveProp('companyName', 'Kava Labs')
    expect(kavaLabsEngineer).toHaveProp('jobTitle', 'Senior Software Engineer II')

    let teamsnapEngineer = paddingContainer.childAt(1)
    expect(teamsnapEngineer).toHaveProp('companyName', 'TeamSnap')
    expect(teamsnapEngineer).toHaveProp('jobTitle', 'Software Engineer')

    let granicusEngineer = paddingContainer.childAt(2)
    expect(granicusEngineer).toHaveProp('companyName', 'Granicus')
    expect(granicusEngineer).toHaveProp('jobTitle', 'Software Engineer')

    let granicusQa = paddingContainer.childAt(3)
    expect(granicusQa).toHaveProp('companyName', 'Granicus')
    expect(granicusQa).toHaveProp('jobTitle', 'Quality Assurance Engineer')

    let spsQa = paddingContainer.childAt(4)
    expect(spsQa).toHaveProp('companyName', 'SPS Commerce')
    expect(spsQa).toHaveProp('jobTitle', 'Quality Assurance Analyst')

    let spsLead = paddingContainer.childAt(5)
    expect(spsLead).toHaveProp('companyName', 'SPS Commerce')
    expect(spsLead).toHaveProp('jobTitle', 'Support Center Lead')

    let spsSeniorCoa = paddingContainer.childAt(6)
    expect(spsSeniorCoa).toHaveProp('companyName', 'SPS Commerce')
    expect(spsSeniorCoa).toHaveProp('jobTitle', 'Senior Customer Operations Analyst')

    let spsCoa = paddingContainer.childAt(7)
    expect(spsCoa).toHaveProp('companyName', 'SPS Commerce')
    expect(spsCoa).toHaveProp('jobTitle', 'Customer Operations Analyst')
  });
});
