import * as React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
}

const SecondaryBtn: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      className={`justify-center rounded-[40px] border border-solid border-violet-700 px-10 py-3.5 text-violet-700 max-md:px-5 ${className}`}
    >
      {children}
    </button>
  )
}

export default SecondaryBtn
