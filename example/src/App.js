import React, { useRef, useState } from 'react'
import { useClickOutside } from 'hook-click-outside'

export default () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!isMenuOpen)
  const node = useRef(null)

  useClickOutside(node, toggleMenu)

  return (
    <div>
      <button onClick={toggleMenu}>Toggle menu</button>
      {
        isMenuOpen &&
        <div ref={node} className='container'>
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
            <li>Menu item 4</li>
          </ul>
        </div>
      }
    </div>)
}
