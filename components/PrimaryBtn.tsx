import * as React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
}

const PrimaryBtn: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      className={`justify-center rounded-[40px] px-9 py-3.5 text-white [background:linear-gradient(180deg,rgb(164,1,255)_0%,rgb(117,1,255)_100%)] max-md:px-5 ${className}`}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
