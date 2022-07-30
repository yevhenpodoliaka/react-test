import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

 const IconBtn = ({ children, onClick, ...allyProps }) => (
  <Btn type="button"  onClick={onClick} {...allyProps}>
    {children}
  </Btn>
);

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

IconBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};


export default IconBtn

const Btn = styled.button`   
  margin: 0;
    padding: 10px;
    border: none;
    border-radius: 50%;
    color: white;
    font: inherit;
    background-color: grey;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;`
