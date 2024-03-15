import React from 'react'

const CheckedBox = ({title, onChange, state , key}) => {
  return (
    <div>
    <input
      type="checkbox"
      checked={state}
      onChange={onChange}
     
    />
    <label>{title}</label>
  </div>
  )
}

export default CheckedBox