import ClickOutside from '../index';
import * as React from 'react';
import { shallow } from 'enzyme';

describe('ClickOutside', () => {
  const mockClickOutside = jest.fn();
  const wrapper = shallow(<ClickOutside className='test class' clickedOutside={mockClickOutside}><p>test children</p></ClickOutside>);

  it('renders the div with the correct classname', () => {
    expect(wrapper.find('div').hasClass('test class')).toBeTruthy();
  });

  it('renders the children components', () => {
    const childParagraph = wrapper.find('div').childAt(0);
    expect(childParagraph.text()).toBe('test children');
    expect(childParagraph.type()).toBe('p');
  });

  // TODO: add tests for the hook and the callback
});
