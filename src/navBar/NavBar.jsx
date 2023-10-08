import { BiDonateHeart, BiCommentError, BiUserCircle } from "react-icons/bi";
import { NavBarItem } from "./NavBarItem";

export function NavBar({ active }) {
  const list = [
    {
      Icon: BiDonateHeart,
      link: "/services",
      namePage: "Serviços",
    },
    {
      Icon: BiCommentError,
      link: "/demands",
      namePage: "Demandas",
    },
    {
      Icon: BiUserCircle,
      link: "/account",
      namePage: "Conta",
    },
  ];

  return (
    <>
      <div className="h-20"></div>
      <footer className="flex flex-row mt-auto text-sm justify-around fixed bottom-0 w-full bg-gray-100 rounded-t-xl shadow-nav">
        {list.map((item, index) => (
          <NavBarItem {...item} active={active} key={index} />
        ))}
      </footer>
    </>
  );
}
