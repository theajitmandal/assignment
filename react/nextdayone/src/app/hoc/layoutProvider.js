import React from 'react'

//receiving values from children is called HOC
const LayoutProvider = ({children}) => {
  return (
    <div>LayoutProvider : {children}</div>
  )
}

export default LayoutProvider