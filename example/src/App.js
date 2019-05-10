import React, { Component } from 'react';
import ClickOutside from 'click-outside';

// TODO: convert to typescript
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
            <ClickOutside clickedOutside={this.toggleMenu} ignoreClick={!this.state.isMenuOpen}>
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
