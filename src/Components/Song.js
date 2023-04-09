import { FaEllipsisV, FaPlay } from "react-icons/fa";
import { StyleSong } from './Styles/Song.styled'

const Song = ({ song }) => {
  return (
    <StyleSong className="song">
      <button>
        <FaPlay/>
      </button>
      <h3>{song.song}
        <button><FaEllipsisV/></button>
      </h3>
      <h5>{song.singer}</h5>
    </StyleSong>
  )
}

export default Song