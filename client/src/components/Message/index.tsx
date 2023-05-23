import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from "./Message.module.css";

type MessageType = {
  timer: number;
  children: string;
}

export const Message = ({timer, children}: MessageType) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const navigate = useNavigate()

  useEffect(() => {
    setIsHidden(true)
    setTimeout(() => {
      setIsHidden(false);
      navigate("/")
    }, timer)
  }, [])

  return (
    <div className={classNames(styles.wrapper, {
      [styles.isActive]: isHidden 
    })} >
      {children}
    </div>
  )    
}