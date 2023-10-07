import { FaPlus } from "react-icons/fa";

export function CreateDemandButton() {
  return (
    <a
      href="/demand/create"
      className="bg-[#B3261E] text-white p-2 px-4 rounded-full"
    >
      <FaPlus /> Criar nova demanda
    </a>
  );
}
