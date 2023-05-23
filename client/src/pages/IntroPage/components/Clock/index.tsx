import React, { useEffect, useState } from 'react';
import styles from "./Clock.module.css"

export const Clock = () => {
  const [clock, setClock] = useState<string>(new Date().toLocaleTimeString())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000)
    return () => {clearInterval(intervalId)}
  }, [])

  return (
    <div className={styles.clock}>{clock}</div>
  )
}