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
<<<<<<< HEAD
      {/* <div className="h-10"></div> */}
      <footer className="flex flex-row mt-auto text-sm justify-around fixed bottom-0 w-full bg-gray-100 rounded-t-xl">
=======
      <div className="h-10"></div>
      <footer className="h-10 px-2 flex flex-row mt-auto text-sm justify-between fixed bottom-0 w-full bg-white">
>>>>>>> f5d65aeb61db7a8d6a08090926d6f3c20df92e7d
        {list.map((item, index) => (
          <NavBarItem {...item} active={active} key={index} />
        ))}
      </footer>
    </>
  );
}
