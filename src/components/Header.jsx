import React, { useContext } from 'react';
import ArcadeContext from '../context/arcadeContext';

export default function Header() {
  const { playerName } = useContext(ArcadeContext);
  return (
    <header>
      <h1>MUD0W'S 4RC4D3</h1>
      <p>{playerName}</p>
    </header>
  );
}
