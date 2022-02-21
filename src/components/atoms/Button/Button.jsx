import React from 'react'
import classnames from 'classnames'
import styles from './index.css';
import PropTypes from 'prop-types'


  
const sizes = {
  small: 'px-3 py-2 rounded-sm',
  medium:'px-4 py-2 rounded-md text-base',
  large:'px-5 py-3 rounded-lg text-lg',
}


const disabledClass = (disable) => disable ? 'cursor-not-allowed bg-gray' : ''

function Button(props) {
  const { type, onClick, disabled, className, label, size, backgroundColor, color} = props

  const classProps = classnames(
    styles.button,
    sizes[size],
    className,
    disabledClass(disabled)
  )

  return (
    <button className={classProps} onClick={onClick} type={type} disabled={disabled} style={{backgroundColor, color}}>{label}</button>
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
  rounded: PropTypes.bool,
  color:PropTypes.string,
}

Button.defaultProps = {
  type:'submit',
  onClick: () => { },
  disabled: false,
  className: null,
  label: null,
  size: 'medium',
  backgroundColor: null,
  rounded:true,
  color:null
}
export default Button