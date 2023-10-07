import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { NavBar } from "../../nav/NavBar";
import { SectionItem } from "./SectionItem";

export function ServiceCreatePage() {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([
    { name: "horarios", content: "de 0 as 11 horas" },
  ]);

  function handleClick() {
    setSections((old) => [...old, { name: "", content: "" }]);
  }

  return (
    <div className="bg-gray-200 p-2 h-screen gap-2">
      <input
        type="text"
        value={title}
        placeholder="Nome do serviço"
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
      <NavBar />
    </div>
  );
}
