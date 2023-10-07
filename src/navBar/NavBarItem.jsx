import { Link } from "react-router-dom";

export function NavBarItem({ link, Icon, namePage, active }) {
  return (
<<<<<<< HEAD
    <Link to={link} className="flex-col gap-1 text-xs space-y-2 pt-4">
=======
    <Link to={link} className="flex-col gap-1 text-xs hover:bg-black/10 px-10">
>>>>>>> f5d65aeb61db7a8d6a08090926d6f3c20df92e7d
      <Icon
        color={active === namePage ? "red" : "gray"}
        className="text-base text-2xl"
      />
      <p
        className={`${"font-medium text-sm pb-2 border-b-4"} ${
          active === namePage ? "text-red-700 border-red-700" : "border-gray-100"
        }`}
      >
        {namePage}
      </p>
    </Link>
  );
}
