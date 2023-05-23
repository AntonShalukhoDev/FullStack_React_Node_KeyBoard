export type SongType = {
  song?: SongDataType,
  autoPlay?: (song: string) => void | undefined,
  stopPlaying: () => void,
}

export type SongServiceType = {
  song1: SongDataType,
  song2: SongDataType,
  song3: SongDataType,
  text1: string,
  text2: string,
}
export type SongDataType = {
  songText: string,
  songCode: string,
}

export type LearnDeskType = {
  autoPlay: (song: string) => void,
  stopPlaying: () => void
} 