import React from 'react'
import "./Toggle-switch.css"
const Toggle = () => {
  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input type="checkbox" className="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default Toggle
