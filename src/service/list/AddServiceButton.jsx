import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export function AddServiceButton() {
  return (
    <Link
      to={"/services/create"}
      className="px-3 py-2 bg-red-700 rounded-full text-white font-medium text-base"
    >
      <FaPlus /> Adicionar Serviço
    </Link>
  );
}
