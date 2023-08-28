import { createContext, useEffect, useState } from "react";
import { onAuthStateChanedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanedListener((user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
