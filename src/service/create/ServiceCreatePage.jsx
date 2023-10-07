import { useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { NavBar } from "../../nav/NavBar";
import { SectionItem } from "./SectionItem";

export function ServiceCreatePage() {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([{ name: "", content: "" }]);

  function handleClick() {
    setSections((old) => [...old, { name: "", content: "" }]);
  }

  return (
    <div className="bg-gray-200 p-2 h-screen gap-2">
      <input
        type="text"
        value={title}
        placeholder="Nome do serviço"
        onChange={(e) => setTitle(e.target.value)}
        className="font-bold text-lg p-2 rounded shadow"
      />
      {sections.map((section) => (
        <SectionItem section={section}></SectionItem>
      ))}
      <button
        onClick={handleClick}
        className="p-2 rounded bg-blue-500 text-white"
      >
        <FaPlus /> Adicionar Seção
      </button>
      <div className="flex-row gap-2 mt-auto">
        <button className="p-2 rounded text-white flex-1 bg-red-500">
          <FaTimes /> Cancelar
        </button>
        <button className="p-2 rounded text-white flex-1 bg-green-500">
          <FaCheck /> Salvar
        </button>
      </div>
      <NavBar />
    </div>
  );
}
