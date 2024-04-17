import * as React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
}

const GradientDiv: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      className={`justify-center rounded-[40px]  text-white [background:linear-gradient(90deg,rgb(164,1,255)_0%,rgb(117,1,255)_100%)] ${className} `}
    >
      {children}
    </button>
  )
}

export default GradientDiv
