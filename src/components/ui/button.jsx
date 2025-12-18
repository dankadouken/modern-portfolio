// button.jsx - Reusable Button component
// Consistent button styling across the app

import React from 'react'

export function Button({ size = "default", variant = "default", className = "", children, ...props }) {
  const sizeClasses = {
    default: "px-4 py-2",
    lg: "px-8 py-3"
  }
  
  const variantClasses = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border-2 border-current hover:bg-opacity-10"
  }
  
  return (
    <button
      className={`rounded font-medium transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
