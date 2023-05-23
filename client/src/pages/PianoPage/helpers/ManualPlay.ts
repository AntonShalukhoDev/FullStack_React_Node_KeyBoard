import { RefKeyType } from "../../../components/Piano/types";

export default class ManualPlay {

    static changeKeyUp(ref: RefKeyType): void {
        if(ref.ref.current !== null) {
            ref.ref.current.style.backgroundColor = 'white';
            ref.ref.current.style.backgroundColor = `white`;
            ref.ref.current.style.border = `1px solid black`;
            ref.ref.current.style.height = `90%`;
            ref.ref.current.style.width = `6.6%`;
            ref.audio?.load()
        }
    }

    static changeKeyDown(ref: RefKeyType): void {
        if(ref.ref.current !== null) {
            ref.ref.current.style.backgroundColor = `bisque`;
            ref.ref.current.style.border = `3px solid black`;
            ref.ref.current.style.height = `91%`;
            ref.ref.current.style.width = `6.3%`;
            ref.audio?.play()
        }
    }

    static changeBlackKeyUp(ref: RefKeyType): void {
        if(ref.ref.current !== null) {
            ref.ref.current.style.borderBottom = `solid 0.8rem black`;
            ref.ref.current.style.borderLeft = `solid 0.3rem black`;
            ref.ref.current.style.height = `50%`;
            ref.audio?.load()
        }
    }

    static changeBlackKeyDown(ref: RefKeyType): void {
        if(ref.ref.current !== null) {
            ref.ref.current.style.borderBottom = `solid 0rem black`;
            ref.ref.current.style.borderLeft = `solid 0rem black`;
            ref.ref.current.style.height = `53.5%`;
            ref.audio?.play()
        }
    }    
}