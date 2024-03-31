import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface UserContextProps {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}
const UserContext = createContext<UserContextProps>({
  user: undefined,
  setUser: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  name: string;
  avatarURL: string;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
