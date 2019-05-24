import React, { Component } from 'react';
import ClickOutside from 'click-outside';

export default class App extends Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  };

  render () {
    return (
      <div>
        <button onClick={this.toggleMenu}>Toggle menu</button>
          {
            this.state.isMenuOpen &&
            <ClickOutside clickedOutside={this.toggleMenu} className='container'>
              <ul>
                <li>Menu item 1</li>
                <li>Menu item 2</li>
                <li>Menu item 3</li>
                <li>Menu item 4</li>
              </ul>
            </ClickOutside>
          }
      </div>
    )
  }
}
