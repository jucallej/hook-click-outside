import {MutableRefObject, useEffect, useRef} from 'react';

export const useClickOutside = (clickedOutside: Function): React.RefObject<HTMLElement> => {
  const node = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener('click', click, true);

    return () => {
      document.removeEventListener('click', click, true);
    };
  });

  const click = (event: Event) => {
    if (node.current && event.target instanceof Node && !node.current.contains(event.target)){
      event.stopPropagation();
      event.preventDefault();
      clickedOutside();
    }
  };

  return node;
};
