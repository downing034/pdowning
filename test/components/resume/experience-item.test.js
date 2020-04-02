import React from 'react';
import { shallow } from 'enzyme';
import { Job } from '../../../test/factories/job';
import ExperienceItem from 'components/resume/experience-item';

describe('ExperienceItem', () => {
  const job = Job.build()

  let props = { job: job }

  it('renders ExperienceItem with job name and company name', () => {
    let wrapper = shallow(<ExperienceItem {...props} />)
    let experienceName = wrapper.find('h5')
    expect(experienceName).toHaveText("Bartender – Paddy's Pub")

    let experienceList = wrapper.find('li')
    expect(experienceList).toHaveLength(3)
  });

  it('renders ExperienceItem with job name and company name', () => {
    const ratBasher = Job.build({ title: 'Rat Basher', companyName: '' })
    let emptyCompanyProps = { job: ratBasher }

    let wrapper = shallow(<ExperienceItem {...emptyCompanyProps} />)
    let experienceName = wrapper.find('h5')
    expect(experienceName).toHaveText("Rat Basher")

    let experienceList = wrapper.find('li')
    expect(experienceList).toHaveLength(3)
  });
});
