import React from 'react'

const Button = ({
    buttonName = "Create",
    type = "button", // Default to "button" to prevent accidental form submissions
    form,
    className = "",
    onClick // Added to handle actions
}) => {
    return (
        <button
            type={type}
            form={form}
            className={`btn-base ${className}`} // Allows for base styling + custom classes
            onClick={onClick}
        >
            {buttonName}
        </button>
    )
}

export default Button