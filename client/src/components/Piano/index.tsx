import React from 'react'
import { blackKeys, whiteKeys } from './assets/KeyMap'
import { PianoKey } from './components/PianoKey'
import { PianoType, RefKeyType } from './types';
import styles from "./Piano.module.css"

export const Piano = ({
  setKeyRef
}: PianoType) => {
  const KeysMap = [whiteKeys, blackKeys]

  const getWhiteKeyRef = (ref: RefKeyType) => {

    setKeyRef((preveState) => {
      let flag = true;
      preveState?.forEach(el => {
        if(el?.ref.current === ref.ref.current) {
          flag = false
        }
      })
      if(flag) {
        preveState?.push(ref)
      }
      return preveState
    })
  }

  return (
    <div className={styles.piano} >
      {
        KeysMap.map(keyMap => (
          keyMap.map(key => (
            <PianoKey 
              key={key.name} 
              id={key.name}
              audio={key.audio}
              keyClass={key.keyClass} 
              keyStyle={key.keyStyle} 
              keyName={key.keyName}
              name={key.key}
              callback={getWhiteKeyRef}
            />
          ))
        ))
      }
    </div>
  )
}
