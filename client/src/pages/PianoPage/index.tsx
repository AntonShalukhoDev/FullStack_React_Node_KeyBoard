import React, { FC, useEffect, useState } from 'react'
import { Account } from '../../components/Account'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectorChangeName } from '../../store'
import AutoPlay from './helpers/AutoPlay'
import { Button } from '../../UI/Button/index'
import { Piano } from '../../components/Piano/index'
import { RefKeyType } from '../../components/Piano/types'
import { sendLogout } from '../../service/api/sendLogout'
import { LearnDesk } from '../../components/LearnDesk'
import { keyDown, keyUp, mouseDown, mouseUp, touchEnd, touchStart } from './helpers'
import styles from "./PianoPage.module.css"

export const PianoPage: FC = () => {   
  const [keyRefs, setKeyRef] = useState<Array<RefKeyType | null>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isChangeName: boolean = useSelector(selectorChangeName)
  const navigate = useNavigate()
  const autoPlay = new AutoPlay(keyRefs)

  const eventAdapter = (e: KeyboardEvent | MouseEvent | TouchEvent) => {
    switch(e.type) {
      case 'keydown': keyDown((e as KeyboardEvent).code, keyRefs); break;
      case 'keyup': keyUp((e as KeyboardEvent).code, keyRefs); break;
      case 'mousedown': mouseDown((e as MouseEvent).target, keyRefs); break;
      case 'mouseup': mouseUp((e as MouseEvent).target, keyRefs); break;
      case 'touchstart': touchStart((e as TouchEvent).target, keyRefs); break;
      case 'touchend': touchEnd((e as TouchEvent).target, keyRefs); break;
      default: break;
    }
  }

  const addEvent = () => {
    document.addEventListener('keydown', eventAdapter)
    document.addEventListener('keyup', eventAdapter)
    document.addEventListener('mousedown', eventAdapter)
    document.addEventListener('mouseup', eventAdapter)
    document.addEventListener('touchstart', eventAdapter)
    document.addEventListener('touchend', eventAdapter)
  }

  const removeEvent = () => {
    document.removeEventListener('keydown', eventAdapter)
    document.removeEventListener('keyup', eventAdapter)
    document.removeEventListener('mousedown', eventAdapter)
    document.removeEventListener('mouseup', eventAdapter)
    document.removeEventListener('touchstart', eventAdapter)
    document.removeEventListener('touchend', eventAdapter)
  }

  useEffect(() => {
    if(!isChangeName) {
      addEvent()
    } else {
      removeEvent()
    }

    return () => {
      removeEvent()
    }
  }, [isChangeName])

  const handleLogout = () => {
    setIsLoading(true)
    sendLogout()
      .then(() => {
        navigate('/')
      })
      .catch((e) => {throw new Error(e.response.message)})
      .finally(() => setIsLoading(false))
  }

  const playing = (song: string): void => {
    autoPlay.playSong(song)
  }

  const stopPlaying = (): void => {
    autoPlay.clearApi()
  }
  
  return (
    <div  className={styles.wrapper}>
      <div className={styles.bodyShadow}>
      </div>
      <LearnDesk autoPlay={playing} stopPlaying={stopPlaying}/>
      <Piano setKeyRef={setKeyRef}/>
      <Button variant="exit" onClick={handleLogout} isLoading={isLoading} >Exit</Button>
      <Account/>
      <Outlet/>
    </div>
  )
}