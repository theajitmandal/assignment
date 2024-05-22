import React from 'react'
import LayoutProvider from './layoutProvider'

//LayoutProvider is HOC
const HOC = () => {
  return (
    <div>
      <LayoutProvider>
        <input placeholder='enter name'/>
      </LayoutProvider>
    </div>
  )
}

export default HOC