import React from 'react'
import classnames from 'classnames'
import styles from './index.css';
import PropTypes from 'prop-types'


  
const sizes = {
  small: 'px-3 py-2 rounded-sm',
  medium:'px-4 py-2 rounded-md text-base',
  large:'px-5 py-3 rounded-lg text-lg',
}

cons


function Button(props) {
  const { type, onClick, disabled, rounded, className, label, size, backgroundColor} = props

  const classProps = classnames(
    styles.button,
    sizes[size],
    className

  )

  return (
    <button className={classProps} onClick={onClick} type={type} disabled={disabled} style={backgroundColor && {backgroundColor}}>{label}</button>
  )
}


Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  backgroundColor: PropTypes.string,
  rounded: PropTypes.bool
}

Button.defaultProps = {
  type:'submit',
  onClick: () => { },
  disabled: false,
  className: null,
  label: null,
  size: 'medium',
  backgroundColor: null,
  rounded:true
}
export default Button