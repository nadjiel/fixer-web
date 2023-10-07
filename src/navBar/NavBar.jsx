import { FaUser } from "react-icons/fa";
import { NavBarItem } from "./NavBarItem";

export function NavBar({ active }) {
  const list = [
    {
      Icon: FaUser,
      link: "/services",
      namePage: "services",
    },
    {
      Icon: FaUser,
      link: "/demands",
      namePage: "demands",
    },
    {
      Icon: FaUser,
      link: "/account",
      namePage: "account",
    },
  ];

  return (
    <>
      <div className="h-10"></div>
      <footer className="h-10 flex flex-row mt-auto text-sm justify-between fixed bottom-0 w-full bg-white">
        {list.map((item, index) => (
          <NavBarItem {...item} active={active} key={index} />
        ))}
      </footer>
    </>
  );
}
