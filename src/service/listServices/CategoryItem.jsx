import { IoHeartCircle } from "react-icons/io5";
import { primaryColor } from "../../primaryColor";
import { Link } from "react-router-dom";

export function CategoryItem({ category }) {
  return (
    <Link
      to={`/services/category/${category}`}
      className="bg-[#EAF1F9] font-medium rounded-xl p-4 w-full flex-row align-center gap-3 cursor-pointer"
    >
      <IoHeartCircle color={primaryColor} size={32} className="shrink-0" />
      <h1 className="text-xl text-primary">{category}</h1>
    </Link>
  );
}
