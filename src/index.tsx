/**
 * @class ClickOutside
 */

import * as React from 'react';
import {ReactNode, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

export type Props = { clickedOutside: Function, children: ReactNode, className: string };

const ClickOutside: React.FunctionComponent<Props> = ({clickedOutside, children, className}) => {
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

ClickOutside.propTypes = {
  clickedOutside: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};

export default ClickOutside;
