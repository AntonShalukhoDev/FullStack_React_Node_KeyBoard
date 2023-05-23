import React from 'react'
import { IntroConfig } from '../../config/IntroConfig';
import styles from "./Intro.module.css"

export const Intro = () => (
  <div className={styles.wrapper}>
    <IntroConfig/>
  </div>
)

