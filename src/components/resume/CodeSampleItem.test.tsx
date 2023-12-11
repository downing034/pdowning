import React from 'react';
import { shallow } from 'enzyme';
import CodeSampleItem, { CodeSampleItemProps } from './CodeSampleItem';
import { CodeSample } from 'constants/types';

describe('CodeSampleItem', () => {
  let sample: CodeSample = {
    appName: 'Charlie Work',
    appDescription: 'Site for dirty jobs',
    siteUrl: 'charlie.work.edu',
    githubLink: 'github.charlie.work.com'
  };

  let props: CodeSampleItemProps = { sample };

  test('renders CodeSampleItem', () => {
    let wrapper = shallow(<CodeSampleItem {...props} />)

    let name = wrapper.find('strong')
    expect(name.text()).toBe('Charlie Work')

    expect(wrapper.text()).toBe('Charlie Work – Site for dirty jobsHeroku: charlie.work.eduGithub: github.charlie.work.com')

    let herokuLink = wrapper.find('a#sample-site-url')
    expect(herokuLink).toHaveProp('href', 'charlie.work.edu')

    let githubLink = wrapper.find('a#sample-github-link')
    expect(githubLink).toHaveProp('href', 'github.charlie.work.com')
  });
});
