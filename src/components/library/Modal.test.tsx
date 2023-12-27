import React from 'react';
import { shallow } from 'enzyme';
import Modal, { ModalProps } from './Modal';

describe('Modal', () => {
  
  const props: ModalProps = {
    modalBody: <p>foobar</p>
  };

  test('renders Modal with child', () => {
    let wrapper = shallow(<Modal {...props} />)
    expect(wrapper).toHaveClassName('modal')

    let modalBodyText = wrapper.find('.modal-body');
    expect(modalBodyText.text()).toBe('foobar');
  });
});