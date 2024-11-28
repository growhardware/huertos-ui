import React, { useState, useContext, createContext } from 'react';
import { signUp, signIn, signOut } from '../services/auth';
import { useProvideAuth } from '../hooks/useAuth';
import { Route, Navigate } from 'react-router-dom';

interface AuthContextValue {
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
}

const auth = {
  isAuthenticated: false,
  signup(credentials, cb) {
    auth.isAuthenticated = true;
    signUp(credentials, cb);
  },
  signin(credentials, cb) {
    auth.isAuthenticated = true;
    signIn(credentials, cb);
  },
  signout(cb) {
    auth.isAuthenticated = false;
    signOut(cb);
  },
};

const authContext = createContext(auth);

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export const OnboardingProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

// const authContext = createContext();

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  const [user, setUser] = useState('');
  return useContext(authContext);
};

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const AppProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  console.log('holaaaaaaaaaaaaaaa');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          //   <Redirect
          //     to={{
          //       pathname: '/login',
          //       state: { from: location },
          //     }}
          //   />
          <Navigate to="/auth/signin"></Navigate>
        )
      }
    />
  );
};
