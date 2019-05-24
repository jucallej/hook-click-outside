import {useClickOutside} from '../index';
import { renderHook } from 'react-hooks-testing-library';

describe('useClickOutside', () => {
  const nodeOutside = document.createElement("p");
  const nodeInside = document.createElement("p");
  const nodeToWatch = document.createElement("p");
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true
  });
  event.stopPropagation = jest.fn();
  event.preventDefault = jest.fn();
  const callback = jest.fn();

  beforeAll(() => {
    nodeToWatch.appendChild(nodeInside); 
    document.body.appendChild(nodeOutside);
    document.body.appendChild(nodeToWatch);

    renderHook(() => useClickOutside({current : nodeToWatch}, callback));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('calls the callback when the click is outside', () => {
    nodeOutside.dispatchEvent(event);
    expect(callback).toHaveBeenCalled();
  });
  
  it('stops the propagation and prevents the default behaviour of the event when clicking outside the component', () => {
    nodeOutside.dispatchEvent(event);
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('does not call the callback when the click is on the element watched', () => {
    nodeToWatch.dispatchEvent(event);
    expect(callback).not.toHaveBeenCalled();
  });

  it('does not stops the propagation or prevents the default behaviour of the event when clicking on the element', () => {
    nodeToWatch.dispatchEvent(event);
    expect(event.stopPropagation).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('does not call the callback when the click is inside the element watched', () => {
    nodeInside.dispatchEvent(event);
    expect(callback).not.toHaveBeenCalled();
  });

  it('does not stops the propagation or prevents the default behaviour of the event when clicking inside the element', () => {
    nodeInside.dispatchEvent(event);
    expect(event.stopPropagation).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
