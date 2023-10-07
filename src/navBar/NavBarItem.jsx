import { Link } from "react-router-dom";

export function NavBarItem({ link, Icon, namePage, active }) {
  return (
    <Link to={link} className="flex-col gap-1 text-xs">
      <Icon
        color={active === namePage ? "red" : "gray"}
        className="text-base"
      />
      <p>{namePage}</p>
    </Link>
  );
}
