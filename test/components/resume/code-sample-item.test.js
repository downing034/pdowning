import React from 'react';
import { shallow } from 'enzyme';
import CodeSampleItem from 'components/resume/code-sample-item';

describe('CodeSampleItem', () => {
  let props = {
      appName: 'Charlie Work',
      appDescription: 'Site for dirty jobs',
      herokuLink: 'charlie.work.edu',
      githubLink: 'github.charlie.work.com'
    }

  it('renders CodeSampleItem', () => {
    let wrapper = shallow(<CodeSampleItem {...props} />)

    let name = wrapper.find('strong')
    expect(name).toHaveText('Charlie Work')

    expect(wrapper).toHaveText('Charlie Work – Site for dirty jobsHeroku: charlie.work.eduGithub: github.charlie.work.com')

    let herokuLink = wrapper.find('a#sample-heroku-link')
    expect(herokuLink).toHaveProp('href', 'charlie.work.edu')

    let githubLink = wrapper.find('a#sample-github-link')
    expect(githubLink).toHaveProp('href', 'github.charlie.work.com')
  });
});
