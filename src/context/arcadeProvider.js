import React, { useState } from 'react';
import ArcadeContext from './arcadeContext';

export default function Provider ({children}) {
  const [playerName, setPlayerName] = useState('PL4Y3R');
  return (
    <ArcadeContext.Provider value={ playerName }>
      {children}
    </ArcadeContext.Provider>
  )
}
