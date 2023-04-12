import {StyledMusicDetail} from './Styles/MusicDetail.Styled'

const MusicDetail = ({ song }) => {
  return (
    <StyledMusicDetail>
      <p Style="line-height:0">
        {song.song}
      </p>
      <p Style='line-height:0; font-size: 10px; font-style:italic;'>
      {song.singer}
      </p>
    </StyledMusicDetail>
  )
}

export default MusicDetail