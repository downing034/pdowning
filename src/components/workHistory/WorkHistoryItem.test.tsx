import React from 'react';
import { shallow, mount } from "enzyme";
import { Job, TechonologiesUsed } from 'constants/index';
import WorkHistoryItem, { WorkHistoryItemProps } from './WorkHistoryItem';
import { ModalContextProvider } from 'contexts/ModalContext';

describe('Profile', () => {

  let openModal: () => void;

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

  let props: WorkHistoryItemProps = {
    job: mockJob,
    activeJob: true,
  };

  beforeEach(() => {
    openModal = jest.fn();
  })

  test('renders WorkHistoryItem with active classes', () => {
    let wrapper = shallow(<WorkHistoryItem {...props} />)
    expect(wrapper).toHaveClassName('.current-item')

    let date = wrapper.find('.date')
    expect(date).toHaveClassName('date-current')
    expect(date.text()).toBe('DEC 2023 - CURRENT')

    let jobTitle = wrapper.find('.title')
    expect(jobTitle.text()).toBe('Head Guy @ Main Company')

    let jobDescription = wrapper.find('.descr')
    expect(jobDescription.text()).toBe('I do cool stuff here')
  });

  test('renders WorkHistoryItem with past job classes', () => {
    mockJob = { ...mockJob, endDate: new Date('1/2/24') }
    props = { job: mockJob, activeJob: false }
    let wrapper = shallow(<WorkHistoryItem {...props} />)
    expect(wrapper).toHaveClassName('.past-item')

    let date = wrapper.find('.date')
    expect(date).toHaveClassName('date-past')
    expect(date.text()).toBe('DEC 2023 - JAN 2024')
  });

  test.skip('onClick triggers correct "close" callback', () => {
    let wrapper = mount(
      <ModalContextProvider>
        <WorkHistoryItem {...props} />
      </ModalContextProvider>
    )

    expect(openModal).toHaveBeenCalledTimes(0)
    let modalButton = wrapper.find('button')
    modalButton.simulate('click');

    expect(openModal).toHaveBeenCalledTimes(1)

    // todo finish modal open assertions with mount instead of shallow
  });
});
