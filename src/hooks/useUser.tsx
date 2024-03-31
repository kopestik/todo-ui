import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const useUser = () => {
  const { setUser, user } = useContext(UserContext);

  return { setUser, user };
};

export { useUser };
