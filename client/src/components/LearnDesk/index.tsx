import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Song } from './components/Song'
import { toggleSongView } from '../../store/slices/Song1Slice'
import { toggleSong2View } from '../../store/slices/Song2Slice'
import { toggleSong3View } from '../../store/slices/Song3Slice'
import { selectorSong1, selectorSong2, selectorSong3 } from '../../store'
import { SongsData } from "./assets/SongsData"
import { LearnDeskType, SongDataType } from './types'
import styles from "./LearnDesk.module.css"

export const LearnDesk: FC<LearnDeskType> = ({autoPlay, stopPlaying}) => {
  const isSong1: boolean = useSelector(selectorSong1)
  const isSong2: boolean = useSelector(selectorSong2)
  const isSong3: boolean = useSelector(selectorSong3) 

  const dispatch = useDispatch()
  
  function getTrulySong(): SongDataType | undefined {
    if(isSong1) return SongsData.song1
    if(isSong2) return SongsData.song2
    if(isSong3) return SongsData.song3
  }

  return (
    <div className={styles.note}>
      <div className={styles.title}>Please choose the song in what you are interested in:</div>
      {!isSong1 && !isSong2 && !isSong3
        ? (
          <div className={styles.songName}>
            <div className={styles.song} onClick={() => dispatch(toggleSongView())} >In the end (Linkin park)</div>
            <div className={styles.song} onClick={() => dispatch(toggleSong2View())} >Ёлочка</div>
            <div className={styles.song} onClick={() => dispatch(toggleSong3View())} >Песенка Мамонтёнка</div>
          </div>
          )
        : (
          <Song song={getTrulySong()} autoPlay={autoPlay} stopPlaying={stopPlaying} />
        )
      }
    </div>
  )
}