import React from 'react'

const DropDown = ({options, onOptionsSelected, selectedValue}) => {
  return (
    <select onChange={evt => onOptionsSelected(evt.target.value)}>
        <option value="">Choose one...</option>
        {options.map(opt => <option 
                                key={opt.value} 
                                value={opt.value}
                                selected={String(selectedValue) === String(opt.value)}>
                                    {opt.text}
                            </option>)}
    </select>
  )
}

export default DropDown