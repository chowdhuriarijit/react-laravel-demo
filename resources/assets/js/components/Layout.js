import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';



class Layout extends Component {
  render() {
    return(
      <div>
        <Header />
         <div className="main-container">
           { this.props.children }
         </div>
        <Footer />
      </div>
    );
  }
}
/**
 * Export data table date picker
 */
export default Layout