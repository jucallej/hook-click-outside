import {useClickOutside} from '../index';
import { renderHook, act } from 'react-hooks-testing-library'
// import * as React from 'react';
// import {useRef} from 'react';
// import { shallow } from 'enzyme';

describe('useClickOutside', () => {
  // const map = {};
  // global.document = {};
  // global.document.addEventListener = jest.fn((event, cb) => {
  //   map[event] = cb;
  // });

  it('calls the callback when there is a click outside the node', () => {
    // const newNode = document.createElement('p');
    console.log(window);
    console.log(global.document);
    console.log(Node);
    console.log(Node);
    const newNode = new Node();
    const node = {current : newNode};
    const callback = jest.fn();
    // @ts-ignore
    renderHook(() => useClickOutside(node, callback));
    act(() => {
      // @ts-ignore
      map.click({target: newNode});
    });

    expect(callback).toHaveBeenCalled();
  });

  // it('does not calls the callback when there is a click inside the node', () => {
  //   const childParagraph = wrapper.find('div').childAt(0);
  //   expect(childParagraph.text()).toBe('test children');
  //   expect(childParagraph.type()).toBe('p');
  // });

  // TODO: add tests for the hook and the callback
});
