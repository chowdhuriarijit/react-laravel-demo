
import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../store/actions/index.js"
import { fetchPages } from "../store/actions/index.js";

import Layout from './Layout';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
   //console.log( this.props.loadColor());
    this.props.dispatch(fetchPages());
  }
  render() {
    return (
       <Layout>

         {this.props.posts.map((post)  => {
           return (
             <div  key={post.id}>{ post.title }</div>
           );
         })}

       </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};


export default connect(
  mapStateToProps
)(Home);

