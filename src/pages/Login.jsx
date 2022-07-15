import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ArcadeContext from '../context/arcadeContext';

export default function Login() {
  const { playerName, onInputChange } = useContext(ArcadeContext);
  const [canRedirect, setCanRedirect] = useState(false);

  return (
    <div>
      {canRedirect && <Redirect to="/lobby" />}
      <form>
        <label htmlFor="playerName">
          D1G1T3 S3U N0M3&nbsp;
          <input
            id="playerName"
            type="text"
            onChange={onInputChange}
            value={playerName}
          />
        </label>
        <button type="button" onClick={() => setCanRedirect(true)}>
          3NTR4R N0 4RC4D3
        </button>
      </form>
    </div>
  );
}
