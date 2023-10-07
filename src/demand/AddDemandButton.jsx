import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export function AddDemandButton() {
  return (
    <Link
      to={"/demand/create"}
      className="px-3 py-2 bg-red-700 rounded-full text-white font-medium text-base"
    >
      <FaPlus /> Adicionar demanda
    </Link>
  );
}
