import React, { useContext } from 'react';
import ArcadeContext from '../context/arcadeContext';
import Header from '../components/Header';

export default function Lobby() {
  const { playerName } = useContext(ArcadeContext);
  return(
    <div>
      <Header />
      <div>
        Lobby dos jogos. { playerName }
      </div>
    </div>
  )
}
