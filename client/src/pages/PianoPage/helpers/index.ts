import { RefKeyType } from "../../../components/Piano/types";
import ManualPlay from "./ManualPlay";

export const makeKeyDown = (ref: RefKeyType) => {
  ref.type === 'white' 
    ? ManualPlay.changeKeyDown(ref) 
    : ManualPlay.changeBlackKeyDown(ref);
}
export const makeKeyUp = (ref: RefKeyType) => {
  ref.type === 'white' 
    ? ManualPlay.changeKeyUp(ref) 
    : ManualPlay.changeBlackKeyUp(ref);
}

export const keyDown = (code: string, keyRefs: Array<RefKeyType | null>): void => {
  keyRefs?.forEach(ref => {
    if (code === ref?.ref.current?.id) { 
      makeKeyDown(ref)
    }
  })
}
export const keyUp = (code: string, keyRefs: Array<RefKeyType | null>): void => {
  keyRefs?.forEach(ref => {
    if (code === ref?.ref.current?.id) {
      makeKeyUp(ref)
    }
  })
}

export const mouseDown = (target: EventTarget | null, keyRefs: Array<RefKeyType | null>): void => {
  keyRefs?.forEach(ref => {
    if (target === ref?.ref.current) {
      makeKeyDown(ref)
    }
  })
}
export const mouseUp = (target: EventTarget | null, keyRefs: Array<RefKeyType | null>): void => {
  keyRefs?.forEach(ref => {
    if (target === ref?.ref.current) {
      makeKeyUp(ref)
    }
  })
}
export const touchStart = (target: EventTarget | null, keyRefs: Array<RefKeyType | null>): void => {
  keyRefs?.forEach(ref => {
    if (target === ref?.ref.current) {
      makeKeyDown(ref)
    }
  })
}
export const touchEnd = (target: EventTarget | null, keyRefs: Array<RefKeyType | null>): void => {
  keyRefs?.forEach(ref => {
    if (target === ref?.ref.current) {
      makeKeyUp(ref)
    }
  })
}