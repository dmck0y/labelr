import App from 'ampersand-app';
import React from 'react';
import localLinks from 'local-links';

export default React.createClass({
  onClick (e) {
    const pathname = localLinks.getLocalPathname(e);

    if (pathname) {
      e.preventDefault();
      App.router.history.navigate(pathname);
    }
  },
  render () {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    ) 
  }
});