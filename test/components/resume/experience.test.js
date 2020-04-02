import React from 'react';
import { shallow } from 'enzyme';
import { TEAMSNAP_SOFTWARE_ENGINEER } from 'components/resume/jobs/teamsnap_software_engineer';
import { GRANICUS_SOFTWARE_ENGINEER } from 'components/resume/jobs/granicus_software_engineer';
import { GRANICUS_SOFTWARE_AUTOMATION_ENGINEER } from 'components/resume/jobs/granicus_software_automation_engineer';
import { PERSONAL_WORK } from 'components/resume/jobs/personal_work';
import Experience from 'components/resume/experience';

describe('Experience', () => {
  it('renders Experience', () => {
    let wrapper = shallow(<Experience />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'EXPERIENCE')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)

    let experiences = wrapper.find('ExperienceItem')
    expect(experiences).toHaveLength(4)

    let tsSoftwareEngineer = paddingContainer.childAt(0)
    expect(tsSoftwareEngineer).toHaveDisplayName('ExperienceItem')
    expect(tsSoftwareEngineer).toHaveProp('job', TEAMSNAP_SOFTWARE_ENGINEER)

    let granicusSoftwareEngineer = paddingContainer.childAt(1)
    expect(granicusSoftwareEngineer).toHaveDisplayName('ExperienceItem')
    expect(granicusSoftwareEngineer).toHaveProp('job', GRANICUS_SOFTWARE_ENGINEER)

    let granicusSoftwareAutomationEngineer = paddingContainer.childAt(2)
    expect(granicusSoftwareAutomationEngineer).toHaveDisplayName('ExperienceItem')
    expect(granicusSoftwareAutomationEngineer).toHaveProp('job', GRANICUS_SOFTWARE_AUTOMATION_ENGINEER)

    let personalWork = paddingContainer.childAt(3)
    expect(personalWork).toHaveDisplayName('ExperienceItem')
    expect(personalWork).toHaveProp('job', PERSONAL_WORK)
  });
});
