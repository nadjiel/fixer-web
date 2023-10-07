import { Link } from "react-router-dom";

export function NavBarItem({ link, Icon, namePage, active }) {
  return (
    <Link to={link} className="flex-col gap-1 text-xs hover:bg-black/10 px-10">
      <Icon
        color={active === namePage ? "red" : "gray"}
        className="text-base"
      />
      <p>{namePage}</p>
    </Link>
  );
}
