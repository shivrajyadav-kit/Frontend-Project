import { createContext, useState, useContext, use } from 'react';
import AppBar from "./AppBar";
import Home from "./Home";
import Login from "./Login";

export const AuthContext = createContext(undefined);
export default function AuthSystem() {
  const [useContextApi, setUseContextApi] = useState(false)
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (newUsername) => {
    setUsername(newUsername);
    setIsLoggedIn(true);
  };
  const logout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };
  const ContextValue = useContextApi ? { username, isLoggedIn, login, logout } : undefined;

  return (
    <AuthContext.Provider value={ContextValue}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar
          username={username}
          isLoggedIn={isLoggedIn}
          logout={logout}
        />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '1rem',
          backgroundColor: '#f0f0f0'
        }}>
          <div>
            <input
              id="use-context-api"
              type="checkbox"
              checked={useContextApi}
              onChange={(e) => setUseContextApi(e.target.checked)}

            />
            <label htmlFor="use-context-api">
              Use Context API : {useContextApi ? 'On' : 'Off'}
            </label>
          </div>
        </div>
        <main style={{ flex: 1, padding: '1rem' }}>
          {isLoggedIn ? (
            <Home />
          ) : (
            <Login OnLogin={login} />
          )}
        </main>
      </div>
    </AuthContext.Provider>
  )
}

