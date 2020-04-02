import React from 'react';
import { shallow } from 'enzyme';
import Resume from 'components/resume/index';

describe('Resume', () => {
  it('renders Resume', () => {
    let wrapper = shallow(<Resume />)
    expect(wrapper).toHaveDisplayName('ScrollableAnchor')
    expect(wrapper).toHaveProp('id', 'resume')

    let downloadLink = wrapper.find('a#resume-download')
    expect(downloadLink).toHaveProp('href', 'P_W_Downing_Resume_2020.pdf')
    expect(downloadLink).toHaveProp('download')

    // resume components
    let mainHeader = wrapper.find('ResumeMainHeader')
    expect(mainHeader).toHaveLength(1)

    let objective = wrapper.find('Objective')
    expect(objective).toHaveLength(1)

    let technicalSkills = wrapper.find('TechnicalSkills')
    expect(technicalSkills).toHaveLength(1)

    let experience = wrapper.find('Experience')
    expect(experience).toHaveLength(1)

    let codeSamples = wrapper.find('CodeSamples')
    expect(codeSamples).toHaveLength(1)

    let awards = wrapper.find('Awards')
    expect(awards).toHaveLength(1)

    let employmentHistory = wrapper.find('EmploymentHistory')
    expect(employmentHistory).toHaveLength(1)
  });
});
