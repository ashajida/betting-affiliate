import React from 'react'


type Props = {
    children: JSX.Element,
    classes?: string
}

const Card = ({children, classes}: Props) => {
  return (
    <div className={`${classes} overflow-clip bg-white rounded-md shadow-sm`}>
        { children }
    </div>
  )
}

export default Card