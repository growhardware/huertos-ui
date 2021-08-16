import React, { useContext, createContext, useState } from "react";
import { signIn, signOut } from "../services/auth"
import { Route, Redirect } from 'react-router-dom'

const auth = {
  isAuthenticated: false,
  signin(credentials, cb) {
    auth.isAuthenticated = true;
    signIn(credentials, cb);
  },
  signout(cb) {
    auth.isAuthenticated = false;
    signOut(cb);
  }
};

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

export const useProvideAuth = () => {

  const [user, setUser] = useState(null);

  const credentials = {
      // A fuego por ahora:
      email: "dale@gol.tv",
      password: "bolso10",
  };

  const signin = cb => {
      return auth.signin( credentials, (body, JWR) => {
      setUser("user");
      cb(body, JWR);
      });
  };

  const signout = cb => {
      return auth.signout(() => {
      setUser(null);
      cb();
      });
  };

  return {
      user,
      signin,
      signout
  };
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
  