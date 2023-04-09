import { useState } from 'react'
import { Container } from './Components/Styles/Container.Styled'
import Header from './Components/Header'
import Songs from './Components/Songs';

function App() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      song: 'aaaa',
      singer: 'mr A' 
    },

    {
      id: 2,
      song: 'bbbb',
      singer: 'mr B' 
    },

    {
      id: 3,
      song: 'cccc',
      singer: 'mr C' 
    },

    {
      id: 4,
      song: 'dddd',
      singer: 'mr D' 
    },
  ])

  return (
    <Container>
      <Header /> 
      <Songs songs={songs} key={songs.id}/>
    </Container>);
}

export default App;
