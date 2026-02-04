import { LogoIcon } from "./icon/LogoIcon";

export const Header = () => {
  return (
    <header className="">
      <a href="/" className="header-logo">
        <LogoIcon />

        <h1 className="header-title">Todos</h1>
      </a>
    </header>
  );
};
