import { Link } from "react-router-dom";

export function NavBarItem({ link, Icon, namePage, active }) {
  return (
    <Link to={link} className="flex-col gap-1 text-xs space-y-2 pt-4">
      <Icon
        className={`${"text-2xl"} ${active === namePage ? "text-red-700" : "text-gray-700"}`}
      />
      <p className={`${"font-medium text-sm pb-2 border-b-4 text-gray-700"} ${
          active === namePage ? "text-primary border-primary" : "border-gray-100"
        }`}
      >
        {namePage}</p>
    </Link>
  );
}
