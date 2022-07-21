import React from 'react'
import PropTypes from 'prop-types'
import { Btn } from './IconBtn.styled';


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

export default IconBtn;
