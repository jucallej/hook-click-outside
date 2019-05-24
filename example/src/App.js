import ClickOutside from 'click-outside';
import React, { useState } from 'react';

export default () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div>
      <button onClick={toggleMenu}>Toggle menu</button>
      {
        isMenuOpen &&
        <ClickOutside clickedOutside={toggleMenu} className='container'>
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
            <li>Menu item 4</li>
          </ul>
        </ClickOutside>
      }
    </div>)
};
