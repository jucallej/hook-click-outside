/**
 * @class ClickOutside
 */

import * as React from 'react';
import {ReactNode, useEffect, useRef} from 'react';

// TODO: do I need the export here?
export type Props = { clickedOutside: Function, children: ReactNode };

const ClickOutside: React.FunctionComponent<Props> = ({clickedOutside, children}) => {
  const node = useRef<HTMLDivElement>(null);

  const click = (event: Event) => {
    if (node.current && event.target instanceof Node && !node.current.contains(event.target)){
      event.stopPropagation();
      event.preventDefault();
      clickedOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('click', click, true);

    return () => {
      document.removeEventListener('click', click, true);
    };
  });

  return (
    <div ref={node}>
      {children}
    </div>
  )
};

export default ClickOutside;
