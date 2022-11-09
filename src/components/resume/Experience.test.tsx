import React from 'react';
import { shallow } from 'enzyme';
import {
  KAVA_LABS_SR_SOFTWARE_ENGINEER,
  TEAMSNAP_SOFTWARE_ENGINEER,
  GRANICUS_SOFTWARE_AUTOMATION_ENGINEER,
  GRANICUS_SOFTWARE_ENGINEER,
  PERSONAL_WORK
} from 'constants/index';

import { Experience } from './';

describe('Experience', () => {
  test('renders Experience', () => {
    let wrapper = shallow(<Experience />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'EXPERIENCE')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)

    let experiences = wrapper.find('ExperienceItem')
    expect(experiences).toHaveLength(5)

    let kavaSrSoftwareEngineer = paddingContainer.childAt(0)
    expect(kavaSrSoftwareEngineer).toHaveDisplayName('ExperienceItem')
    expect(kavaSrSoftwareEngineer).toHaveProp('job', KAVA_LABS_SR_SOFTWARE_ENGINEER)

    let tsSoftwareEngineer = paddingContainer.childAt(1)
    expect(tsSoftwareEngineer).toHaveDisplayName('ExperienceItem')
    expect(tsSoftwareEngineer).toHaveProp('job', TEAMSNAP_SOFTWARE_ENGINEER)

    let granicusSoftwareEngineer = paddingContainer.childAt(2)
    expect(granicusSoftwareEngineer).toHaveDisplayName('ExperienceItem')
    expect(granicusSoftwareEngineer).toHaveProp('job', GRANICUS_SOFTWARE_ENGINEER)

    let granicusSoftwareAutomationEngineer = paddingContainer.childAt(3)
    expect(granicusSoftwareAutomationEngineer).toHaveDisplayName('ExperienceItem')
    expect(granicusSoftwareAutomationEngineer).toHaveProp('job', GRANICUS_SOFTWARE_AUTOMATION_ENGINEER)

    let personalWork = paddingContainer.childAt(4)
    expect(personalWork).toHaveDisplayName('ExperienceItem')
    expect(personalWork).toHaveProp('job', PERSONAL_WORK)
  });
});
