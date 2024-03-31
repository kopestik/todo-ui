import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { Todos } from "../Todos";
import { SidebarHeader } from "./SidebarHeader";
import { UpgradeNow } from "./UpgradeNow";

const Sidebar = () => {
  // saved user to context to replicate authentication
  const { user, setUser } = useUser();

  useEffect(() => {
    setUser({
      name: "John",
      avatarURL: "/default.png",
    });
  }, [setUser]);

  return (
    <aside className="flex-1 flex flex-col max-w-[420px] h-screen bg-sidebar z-10 right-shadow">
      <SidebarHeader
        name={user?.name || ""}
        avatarURL={user?.avatarURL || ""}
      />
      <UpgradeNow />
      <Todos />
    </aside>
  );
};

export { Sidebar };
