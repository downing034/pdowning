import React from 'react';
import { shallow } from "enzyme";
import { Job, TechonologiesUsed } from 'constants/index';
import ExpandedHistoryModal, { ExpandedHistoryModalProps } from './ExpandedHistoryModal';

describe('ExpandedHistoryModal', () => {
  let mocktechnologies: TechonologiesUsed = {
    languages: 'Typescript',
    frameWorks: 'React',
    environment: 'Single Api Service',
    testingTechnologies: 'Jest, Enzyme, Cypress, Playwright',
    otherTechnologies: 'Github, Netlify, Figma, Material-UI, Webpack'
  }

  let mockJob: Job = {
    title: 'Head Guy',
    companyName: 'Main Company',
    location: 'Remote',
    startDate: new Date('12/1/2023'),
    endDate: 'Current',
    blurb: 'I do cool stuff here',
    description: ['built things', 'released things'],
    technologiesUsed: mocktechnologies,
    experienceList: ['product heavy', 'releases', 'architecting'],
  };

  let props: ExpandedHistoryModalProps = {
    job: mockJob,
  };

  test('renders work history modal', () => {
    let wrapper = shallow(<ExpandedHistoryModal {...props} />)

    let jobTitle = wrapper.find('#history-modal-job-title')
    expect(jobTitle.text()).toBe('Head Guy')

    let company = wrapper.find('#history-modal-company')
    expect(company.text()).toBe('Main Company')

    let startDate = wrapper.find('#history-modal-start-date')
    expect(startDate.text()).toBe('December 1, 2023')

    let endDate = wrapper.find('#history-modal-end-date')
    expect(endDate.text()).toBe('Current')

    let description = wrapper.find('#history-modal-description-items')
    expect(description.childAt(0).text()).toBe('built things')
    expect(description.childAt(1).text()).toBe('released things')

    let location = wrapper.find('#history-modal-experience-items')
    expect(location.childAt(0).text()).toBe('product heavy')
    expect(location.childAt(1).text()).toBe('releases')
    expect(location.childAt(2).text()).toBe('architecting')
  });
});
