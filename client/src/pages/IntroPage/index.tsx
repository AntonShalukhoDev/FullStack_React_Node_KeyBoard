import React from 'react'
import { Clock } from './components/Clock'
import { Intro } from './components/Intro'
import styles from "./IntroPage.module.css"
    
export const IntroPage = () => (
    <div className={styles.wrapper}>
        <Clock/>
        <Intro/>
    </div>
)
