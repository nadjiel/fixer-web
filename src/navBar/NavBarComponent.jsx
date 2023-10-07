import { NavBarItem } from "./NavBarItem.jsx";

export const NavBarComponent = ({ nameActive }) => {
  const list = [
    {
      link: "/services",
      imgSrc: "../../public/letra-s.png",
      namePage: "services",
    },
    {
      link: "/demand",
      imgSrc: "../../public/letra-d.png",
      namePage: "demand",
    },
    {
      link: "/services",
      imgSrc: "../../public/letra-s.png",
      namePage: "account",
    },
  ];
  return (
    <footer className="flex justify-between gap-2">
      {list.map((item, index) => {
        const isActive = nameActive === item.namePage
        return <NavBarItem {...item} isActive={isActive} key={index} />;
      })}
    </footer>
  );
};
