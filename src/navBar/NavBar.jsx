import { BiDonateHeart, BiCommentError, BiUserCircle } from "react-icons/bi";
import { NavBarItem } from "./NavBarItem";

export function NavBar({ active }) {
  const list = [
    {
      Icon: BiDonateHeart,
      Icon: BiDonateHeart,
      link: "/services",
      namePage: "Serviços",
      namePage: "Serviços",
    },
    {
      Icon: BiCommentError,
      Icon: BiCommentError,
      link: "/demands",
      namePage: "Demandas",
      namePage: "Demandas",
    },
    {
      Icon: BiUserCircle,
      Icon: BiUserCircle,
      link: "/account",
      namePage: "Conta",
      namePage: "Conta",
    },
  ];

  return (
    <>
      <div className="h-10"></div>
      <footer className="flex flex-row mt-auto text-sm justify-around fixed bottom-0 w-full bg-gray-100 rounded-t-xl">
        {list.map((item, index) => (
          <NavBarItem {...item} active={active} key={index} />
        ))}
      </footer>
    </>
  );
}
