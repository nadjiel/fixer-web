import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export function CreateDemandButton() {
  return (
    <Link to={"/demand/create"} className="px-3 py-2 bg-red-700 rounded-full text-white font-medium text-base">
      <p>Criar nova demanda</p><FaPlus />
    </Link>
  );
}