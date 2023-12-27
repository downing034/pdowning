import React from 'react';
import { shallow } from 'enzyme';
import WorkHistory from './WorkHistory';


describe('about', () => {

  test('renders Work History', () => {
    let wrapper = shallow(<WorkHistory />)
    expect(wrapper).toHaveDisplayName('ScrollableAnchor')
    expect(wrapper).toHaveProp('id', 'work-history')

    let subText = wrapper.find('#work-history-subtext')
    expect(subText.text()).toBe('Click on a title or description to learn more or download a copy of my resume.')

    let resumeLink =  wrapper.find('a#resume-download');
    expect(resumeLink).toHaveProp('href', 'Paul_Downing_Resume.pdf')
    expect(resumeLink).toHaveText('DOWNLOAD RESUME →');

    // renders work history items (currently 5 of them)
    let workHistoryItems = wrapper.find('WorkHistoryItem');
    expect(workHistoryItems).toHaveLength(5)
  });
});
