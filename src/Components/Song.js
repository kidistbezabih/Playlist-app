import { FaEllipsisV } from "react-icons/fa"
// import MusicDetail from './MusicDetail'
import { StyleSong } from './Styles/Song.styled'
import Play from './Play'


const Song = ({ song }) => {
  return (
    <StyleSong>
      <Play song = {song}/>
      <button>
        <FaEllipsisV/>
      </button>
    </StyleSong>
  )
}

export default Song