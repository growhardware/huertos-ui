import { useState } from "react";

const auth = {
  isAuthenticated: false,
  signup(credentials, cb) {
    auth.isAuthenticated = true;
  },
  signin(credentials, cb) {
    auth.isAuthenticated = true;
  },
  signout(cb) {
    auth.isAuthenticated = false;
  }
};

export const useProvideAuth = () => {

  const [user, setUser] = useState(null);

  const signup = (credentials, cb) => {
      return auth.signup( credentials, (body, JWR) => {
      setUser("user");
      cb(body, JWR);
      });
  };

  const signin = (credentials, cb) => {
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
      signup,
      signin,
      signout
  };
}