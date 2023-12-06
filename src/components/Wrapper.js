import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PropTypes from 'prop-types';


function Wrapper(props) {
  Wrapper.propTypes = {
    children: PropTypes.any};
  return (
    <div>
      <NavBar/>
      {props.children}
      <Footer/>
    </div>
  );
}
Wrapper.propTypes ={
  children: PropTypes.node.isRequired,
};
export default Wrapper;
