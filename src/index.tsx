import * as React from 'react';
import { FunctionComponent } from 'react';
import {ReactNode, useEffect, useRef} from 'react';

export type Props = { clickedOutside: Function, children: ReactNode, className?: string };

const ClickOutside: FunctionComponent<Props> = ({clickedOutside, children, className}) => {
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
    <div ref={node} className={className}>
      {children}
    </div>
  )
};

export default ClickOutside;
