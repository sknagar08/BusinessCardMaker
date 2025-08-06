import "./Header.scss";

interface HeaderProps {
  dark: boolean;
}

function Header({ dark }: HeaderProps) {
  return (
    <header className={"header" + (dark ? " dark" : "")}>
      <h1>Professional Card Maker</h1>
    </header>
  );
}

export default Header;
