import { useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { NavBar } from "../../navBar/NavBar";
import { SectionItem } from "./SectionItem";
import { api } from "../../api";

export function ServiceCreatePage() {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([{ name: "", text: "" }]);

  function handleClick() {
    setSections((old) => [...old, { name: "", text: "" }]);
  }

  async function saveService() {
    try {
      const body = { title, sections }
      const result = await api.post("/services", body)
      if (result.status !== 201) {
        throw new Error("Ocorreu um error na requisição")
      }
    } catch (err) {
      console.error()
    }
  }

  return (
    <div className="bg-gray-200 p-2 pb-10 h-screen gap-2">
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
        <button className="p-2 rounded text-white flex-1 bg-green-500" onClick={saveService()}>
          <FaCheck /> Salvar
        </button>
      </div>
      <NavBar active={"Serviços"} />
    </div>
  );
}
