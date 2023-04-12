import Song from './Song'


const Songs = ({songs}) => {
  return (
    <>
      {songs.map((song) => (
        <Song key={song.id} song= {song}/>
      ))}
    </>
  )
}

export default Songs