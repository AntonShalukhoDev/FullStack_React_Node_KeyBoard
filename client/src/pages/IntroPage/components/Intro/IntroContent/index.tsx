import React from 'react'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { LOG_IN_PATH, REGISTRATION_PATH } from '../../../consts';
import styles from "../Intro.module.css";

export const IntroContent = () => (
  <>
    <div className={classNames(styles.content, styles.firstTitle)}>Would you like to learn how to play the piano?</div>
    <div className={classNames(styles.content, styles.secondTitle)}>You can achieve your dreams with us!</div>
    <div className={classNames(styles.content, styles.thirdTitle)}>
      <div className={styles.buttonWrapper}>
        <Link to={LOG_IN_PATH} className={classNames(styles.button, styles.buttonLogOn)} >Log in</Link>
        <Link to={REGISTRATION_PATH} className={classNames(styles.button, styles.buttonLogOn)} >Sign up</Link>
      </div>
    </div>
  </>
)

  
