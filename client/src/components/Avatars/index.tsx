import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIconsWrap } from '../../store/slices/ChangeIconSlice'
import { selectorChangeIcon } from '../../store'
import Icons from '../../UI/Icons'
import { changeIconSrc } from '../../store/slices/AccountIconSlice'
import { CROSS } from '../../assets/iconsUrls'
import { getAvatars } from '../../service/api/getAvatars'
import { BackButton } from '../../UI/BackButton'
import styles from "./Avatars.module.css"
import classNames from 'classnames'


type IconsObj = {
  image: string
}

export const Avatars: FC = () => {
  const isIconDis = useSelector(selectorChangeIcon);
  const dispatch = useDispatch();

  const [icons, setIcons] = useState<any>([])
  
  useEffect(() => {
    respons()
  }, [])
  
  async function respons() {
    getAvatars()
      .then(data => {
        setIcons(data)
      })
      .catch(err => {
        throw new Error(err.response.message)
      })
    
  }

  function toggleIconWrap() {
    dispatch(toggleIconsWrap());
  }

  function newAccountIcon(src: string):void {
    dispatch(changeIconSrc(src))
  }

  return (
    <div className={classNames(styles.iconsWrapper, styles.iconsWrapperActive1)}>
        <div className={styles.icons}>
          <BackButton
            handleSideEffects={toggleIconWrap}
          />
            <img  
                src={CROSS} 
                alt="back" 
                className={styles.backAvatar} 
                onClick={() => {toggleIconWrap()}}
            />
            {isIconDis && icons.map((arr: IconsObj) => <Icons key={arr.image} src={arr.image} changeIcon={newAccountIcon} />)}
        </div>
    </div>
  )
}