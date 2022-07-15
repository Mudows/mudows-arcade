import React, { useState } from 'react';
import ArcadeContext from './arcadeContext';

export default function ArcadeProvider ({children}) {
  const [playerName, setPlayerName] = useState('');

  const onInputChange = ({ target }) => {
    const { value } = target;
    setPlayerName(value.toUpperCase());
  }

  return (
    <ArcadeContext.Provider value={ { playerName, onInputChange } }>
      {children}
    </ArcadeContext.Provider>
  )
}
