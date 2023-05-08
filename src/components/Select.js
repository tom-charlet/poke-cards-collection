import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ items, label, ...props }) => {

    return <label className='flex flex-col gap-2'>
        {label && <span>{label}</span>}
        <select {...props} className='py-3 px-5'>
            {items && items.length && items.map((item, index) => <option key={index}>{item}</option>)}
        </select>
    </label>
}

Select.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
      ]),
}

export default Select