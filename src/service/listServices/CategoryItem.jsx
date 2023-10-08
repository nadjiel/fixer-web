import { Link } from "react-router-dom";

export function CategoryItem({ category, Icon }) {
  return (
    <Link
      to={`/services/category/${category}`}
      className="bg-secondary-200 font-medium rounded-xl p-3 w-full flex-row align-center gap-3 cursor-pointer"
    >
      <Icon size={40} className={"rounded-3xl p-2.5 text-secondary-200 bg-primary min-w-min"}/>
      <h1 className="text-xl text-primary">{category}</h1>
    </Link>
  );
}
