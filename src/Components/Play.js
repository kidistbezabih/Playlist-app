import MusicDetail from './MusicDetail'
import { StyledPlay } from './Styles/Play.Styled'
import PlayIcon from '../Components/PlayIcon'


const Play = ({ song }) => {
  return (
    <StyledPlay>
      <PlayIcon/>
      <MusicDetail song={song}/>
    </StyledPlay>
  )
}

export default Play
