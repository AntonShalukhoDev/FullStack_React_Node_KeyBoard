import React, { FC, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectorAccountIcon, selectorChangeName, selectorUserName } from '../../store'
import { AccountIntro } from './components/AccountIntro'
import { ChangeNameForm } from './components/ChangeNameForm'
import { CLOSE_SVG } from '../../assets/iconsUrls';
import styles from "./Account.module.css"
import classNames from 'classnames'

export const Account: FC = () => {
    const imgRef = useRef<HTMLImageElement>(null)
    const linkWrapRef = useRef<HTMLDivElement>(null)
    const accountIcon: string = useSelector(selectorAccountIcon)
    const isChangeName: boolean = useSelector(selectorChangeName)


    function openLinkWrap(): void {
        imgRef.current?.classList.toggle(styles.imgMarkActive)
        linkWrapRef.current?.classList.toggle(styles.linksWrapActive)
    }
    
  return (
    <div className={styles.root} id="root5">
      <div className={styles.wrapper} >
        <div className={styles.usersIcon} >
          <img 
              src={accountIcon} 
              alt="avatar" 
              className={styles.avatar} 
          />
        </div>
        <div className={classNames(styles.linksWrap ,styles.linkWrapActive)} ref={linkWrapRef} >
          <div className={styles.openMark}>
            <img  
              src={CLOSE_SVG} 
              alt="close image" 
              className="imgMark"
              ref={imgRef} 
              onClick={() => openLinkWrap()}
            />
          </div>
          {!isChangeName
            ? <AccountIntro/>
            : <ChangeNameForm/>
          }
        </div>
      </div>
    </div>
  )
}