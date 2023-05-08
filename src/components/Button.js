import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, className, ...props }) => {
    return <button {...props} className={`bg-gray-900 text-white font-medium tracking-wide uppercase py-3 px-5 rounded ${className ?? ""}`}>
        {children}
    </button>
}

Button.propTypes = {}

export default Button