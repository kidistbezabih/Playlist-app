import React from 'react'
import { IoLibrary } from "react-icons/io5";
import styled from 'styled-components';
import Playlists from './Playlists';

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <div className="top__links">
        <ul>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
          <Playlists />
        </ul>
      </div>
    </Container>
  )
}

export default Sidebar