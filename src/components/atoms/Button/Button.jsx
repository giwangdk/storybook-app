import React from 'react'

function Button({children}) {
  return (
    <button className="p-2 bg-gray-700">{children}</button>
  )
}

export default Button