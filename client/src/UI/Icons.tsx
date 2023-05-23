import React from 'react'

type Props = {
  src: string,
  changeIcon?: (src: string) => void

}

const Icons = ({src, changeIcon}: Props) => {
  return (
    <img src={src} alt="icon" className='avatar icon' onClick={() => changeIcon?.(src)} />
  )
}

export default Icons