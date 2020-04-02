import React from 'react';
import { shallow } from 'enzyme';
import PaddingContainer from 'components/resume/padding-container';

describe('PaddingContainer', () => {
  let childLi = React.createElement('li', { id: 'li1' }, 'one');
  let props = { children: childLi };

  it('renders PaddingContainer', () => {
    let wrapper = shallow(<PaddingContainer {...props} />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('text-left resume-padding')

    let li = wrapper.find('li')
    expect(li).toHaveLength(1)
    expect(li).toHaveText('one')
  });
});
