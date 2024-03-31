import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="text-white h-[125px]">
      <div className="flex bg-primary px-8 py-4 gap-4 h-full">{children}</div>
    </header>
  );
};

export { Header };
