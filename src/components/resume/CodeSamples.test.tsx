import React from 'react';
import { shallow } from 'enzyme';
import { CodeSamples } from './';

describe('CodeSamples', () => {
  test('renders CodeSamples', () => {
    let wrapper = shallow(<CodeSamples />)

    let sectionHeader = wrapper.find('SectionHeader')
    expect(sectionHeader).toHaveProp('headingText', 'CODING SAMPLES')

    let paddingContainer = wrapper.find('PaddingContainer')
    expect(paddingContainer).toHaveLength(1)

    let codingSamples = wrapper.find('CodeSampleItem')
    expect(codingSamples).toHaveLength(3)

    let portfolio = paddingContainer.childAt(0)
    expect(portfolio).toHaveProp('appName', 'Paul Downing')
    expect(portfolio).toHaveProp('appDescription', 'A React application used to showcase my work and info about myself')
    expect(portfolio).toHaveProp('herokuLink', 'https://pdowning.herokuapp.com/')
    expect(portfolio).toHaveProp('githubLink', 'https://github.com/downing034/pdowning')

    let yelp = paddingContainer.childAt(1)
    expect(yelp).toHaveProp('appName', 'Yelpdemo')
    expect(yelp).toHaveProp('appDescription', 'A replication of Yelp! and a few of their features built with Rails')
    expect(yelp).toHaveProp('herokuLink', 'https://yelpdemo34.herokuapp.com/')
    expect(yelp).toHaveProp('githubLink', 'https://github.com/downing034/yelpdemo')

    let twitter = paddingContainer.childAt(2)
    expect(twitter).toHaveProp('appName', 'Twitter App')
    expect(twitter).toHaveProp('appDescription', 'A scaled-back version of Twitter based on the Rails Tutorial')
    expect(twitter).toHaveProp('herokuLink', 'https://sample-twitter-app-demo.herokuapp.com/')
    expect(twitter).toHaveProp('githubLink', 'https://github.com/downing034/twitter-app')
  });
});
