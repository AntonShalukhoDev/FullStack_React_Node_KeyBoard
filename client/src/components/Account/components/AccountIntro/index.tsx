import React, { FC, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIconsWrap } from '../../../../store/slices/ChangeIconSlice'
import {  selectorUserName } from '../../../../store'
import { useNavigate } from 'react-router-dom'
import { toggleChangeNameComponent } from '../../../../store/slices/ChangeNameSlice'
import classNames from 'classnames'
import styles from "./AccountIntro.module.css"

export const AccountIntro: FC = () => {
  const username: string = useSelector(selectorUserName)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleToggleIconWrap = (): void => {
    dispatch(toggleIconsWrap())
    navigate('/piano/avatars')
  }

  const handlerToggleComponent = (): void => {
    dispatch(toggleChangeNameComponent())
  }
    
  return (
    <>
      <div className={styles.welcome}>Welcome</div>
      <div className={styles.welcome}>{username}</div>
      <div onClick={handleToggleIconWrap} className={classNames(styles.links, styles.link1)}>Change Avatar</div>
      <div onClick={handlerToggleComponent} className={classNames(styles.links, styles.link2)}>Change Name</div>
    </>                  
  )
}