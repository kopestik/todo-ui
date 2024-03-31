import { Header } from "../Header";

const SidebarHeader = () => {
  return (
    <Header>
      <div className="overflow-hidden rounded-full h-12 w-12">
        <img
          className="object-cover h-full w-full"
          src="/default.png"
          alt="man with beard, smiling, as profile picture"
        />
      </div>
      <div>
        <h1 className="flex flex-col">
          <span className="font-bold">Hello, Jhon</span>
          <span className="text-2xl font-light italic">
            What are your plans
            <br /> for today?
          </span>
        </h1>
      </div>
    </Header>
  );
};

export { SidebarHeader };
