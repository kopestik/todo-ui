import { Header } from "../Header";

interface SidebarHeaderProps {
  name: string;
  avatarURL: string;
}

const SidebarHeader = ({ avatarURL, name }: SidebarHeaderProps) => {
  return (
    <Header>
      <div className="overflow-hidden rounded-full h-12 w-12">
        {avatarURL && (
          <img
            className="object-cover h-full w-full"
            src={avatarURL}
            alt="profile picture"
          />
        )}
      </div>
      <div>
        <h1 className="flex flex-col">
          <span className="font-semibold text-shadow">Hello, {name}</span>
          <span className="text-2xl italic font-thin text-shadow">
            What are your plans
            <br /> for today?
          </span>
        </h1>
      </div>
    </Header>
  );
};

export { SidebarHeader };
