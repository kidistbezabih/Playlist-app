// rafec
import { FaPlus } from 'react-icons/fa'
import { StyledHeader } from './Styles/Header.styled'

const Header = () => {
  return (
    <StyledHeader className='header'>
     <h3> Playlist </h3>
     <button className='img_btn'>
        <FaPlus/>
     </button>
   </StyledHeader>
 )
}
 

export default Header