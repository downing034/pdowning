import React from 'react';
import { shallow } from 'enzyme';
import { PaddingContainer } from './';
import { PaddingContainerProps } from './PaddingContainer';

describe('PaddingContainer', () => {
  let childLi = React.createElement('li', { id: 'li1' }, 'one');
  let props: PaddingContainerProps = { children: childLi };

  test('renders PaddingContainer', () => {
    let wrapper = shallow(<PaddingContainer {...props} />)
    expect(wrapper).toHaveLength(1)
    expect(wrapper).toHaveClassName('text-left resume-padding')

    let li = wrapper.find('li')
    expect(li).toHaveLength(1)
    expect(li).toHaveText('one')
  });
});
