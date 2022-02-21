import React from 'react'
import classnames from 'classnames'
import styles from './index.css';
import PropTypes from 'prop-types'

function Button(props) {
  const { type, onClick, disabled, className, label, size} = props
  
  const classProps = classnames(
    styles.button,
    size,
    className
  )

  return (
    <button className={classProps} onClick={onClick} type={type} disabled={disabled}>{label}</button>
  )
}


Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  size : PropTypes.oneOf(['small', 'medium', 'large'])
}
export default Button