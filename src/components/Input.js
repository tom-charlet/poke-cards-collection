import React, { useState } from 'react'

export default function Input({ children, label, ...props }) {
    return <label className='flex flex-col gap-2'>
        {label && <span>{label}</span>}
        <input {...props} className='py-3 px-5' />
    </label>
}

export const Number = ({ children, className, ...props }) => {
    const [value, setValue] = useState()

    const handleChange = (e) => {
        const newValue = e.target.value;
    }

    return <input {...props} onChange={handleChange} value={value} type='text' maxLength={7} className={`w-auto py-3 px-5 min-w-0 rounded border-2 focus:outline-0 placeholder:text-gray-300 border-gray-800 ${className ?? ""}`} />
}