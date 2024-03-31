import { Todos } from "../Todos";
import { SidebarHeader } from "./SidebarHeader";
import { UpgradeNow } from "./UpgradeNow";

const Sidebar = () => {
  return (
    <aside className="flex-1 flex flex-col max-w-[420px] h-screen bg-sidebar z-10 right-shadow">
      <SidebarHeader />
      <UpgradeNow />
      <Todos />
    </aside>
  );
};

export { Sidebar };
