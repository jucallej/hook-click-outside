import {MutableRefObject, useEffect} from 'react';

export const useClickOutside = (node: MutableRefObject<HTMLElement>, clickedOutside: Function) => {
  useEffect(() => {
    document.addEventListener('click', click, true);

    return () => {
      document.removeEventListener('click', click, true);
    };
  });

  const click = (event: Event) => {
    if (node.current && event.target instanceof Node && !node.current.contains(event.target)){
      event.stopPropagation()
      event.preventDefault();
      clickedOutside();
    }
  };
};
