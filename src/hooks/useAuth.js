import { useState } from "react";
import { signIn, signOut } from "../services/auth"

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