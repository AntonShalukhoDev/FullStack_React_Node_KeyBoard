import React, { FC, useEffect, useRef } from 'react';
import { PianoKeyType } from '../../types';
import styles from "./PianoKey.module.css"

export const PianoKey: FC<PianoKeyType> = ({
  id: name, 
  audio, 
  keyClass, 
  keyStyle, 
  keyName, 
  name: key, 
  callback
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    callback({ref, audio, type: keyClass === 'key' ? 'white' : 'black', name: key})
  }, [])

    return (
      <div ref={ref} id={name} className={styles[keyClass]} style={{left: keyStyle}}>{keyName}</div>
    )
  
} 




  


