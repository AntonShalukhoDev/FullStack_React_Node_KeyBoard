import { RefKeyType } from "../../../components/Piano/types";

export default class AutoPlay {
    idArray: Array<ReturnType<typeof setTimeout>> = [];
    ref: Array<RefKeyType | null>

    constructor(ref: Array<RefKeyType | null>) {
        this.ref = ref
    }

    clearApi() {
        for (let i of this.idArray) {
            clearTimeout(i)
        }
        this.ref.forEach(el => {
            if(el?.type === 'white' && el.ref.current !== null && el.audio !== null) {
                this.changeWhiteKeyStyle(el)
            } else if(el !== null) (
                this.changeBlackKeyStyle(el)
            )
        })
        this.idArray = []
    }

    changeWhiteKeyStyle(el: RefKeyType) {
        if (el.ref.current !== null && el.audio !== null) {
            el.ref.current.style.backgroundColor = `white`;
            el.ref.current.style.border = `1px solid black`;
            el.ref.current.style.height = `90%`; 
            el.ref.current.style.width = `6.6%`; 
            el.audio.load(); 
        }
    }
    changeWhiteKeyDownStyle(el: RefKeyType) {
        if (el.ref.current !== null && el.audio !== null) {
            el.ref.current.style.backgroundColor = `bisque`;
            el.ref.current.style.border = `3px solid black`;
            el.ref.current.style.height = `91%`; 
            el.ref.current.style.width = `6.36%`; 
            el.audio.play(); 
        }
    }
    changeBlackKeyStyle(el: RefKeyType) {
        if (el.ref.current !== null && el.audio !== null) {
            el.ref.current.style.borderBottom = `solid 0.8rem black`;
            el.ref.current.style.borderLeft = `solid 0.3rem black`;
            el.ref.current.style.height = `50%`; 
            el.audio.load();
        }
    }
    changeBlackKeyDownStyle(el: RefKeyType) {
        if (el.ref.current !== null && el.audio !== null) {
            el.ref.current.style.borderBottom = `solid 0rem black`;
            el.ref.current.style.borderLeft = `solid 0rem black`;
            el.ref.current.style.height = `53.5%`; 
            el.audio.play();
        }
    }

    playSong(song: string) {
        this.clearApi();
        const acc = song.split(' ');
        let time1 = 0;

        acc.forEach(item => {
            this.ref.forEach(el => {
                if (item === el?.name) {
                    if(el.type === 'white') {
                        let id: ReturnType<typeof setTimeout> = setTimeout(() => {
                            if(this.ref !== null) this.changeWhiteKeyDownStyle(el)
                    
                            let id2: ReturnType<typeof setTimeout> = setTimeout(() => {
                                if(this.ref !== null) this.changeWhiteKeyStyle(el)
                            }, 500)
                            this.idArray.push(id2);
                        }, time1);
                        this.idArray.push(id)
                        time1 += 600;
                    } else if(el.type === 'black') {
                        let id: ReturnType<typeof setTimeout> = setTimeout(() => {
                            if(this.ref !== null) this.changeBlackKeyDownStyle(el)
                    
                            let id2: ReturnType<typeof setTimeout> = setTimeout(() => {
                                if(this.ref !== null) this.changeBlackKeyStyle(el)
                            }, 500)
                            this.idArray.push(id2);
                        }, time1);
                        this.idArray.push(id)
                        time1 += 600;
                    }
                }
            })
        })
    }
}