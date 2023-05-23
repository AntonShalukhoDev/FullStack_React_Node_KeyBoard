import React, { MutableRefObject } from "react"

export type PianoKeyType = {
  id: string,
  audio: HTMLAudioElement | null,
  keyClass: string,
  keyStyle: string,
  keyName: string ,
  name: string,
  callback: (callbackAgrum: RefKeyType) => void
}

export type RefKeyType = {
  ref: MutableRefObject<HTMLDivElement | null>,
  audio: HTMLAudioElement | null,
  type: string,
  name: string
}

export type PianoType = {
  setKeyRef: React.Dispatch<React.SetStateAction<(RefKeyType | null)[]>>
}