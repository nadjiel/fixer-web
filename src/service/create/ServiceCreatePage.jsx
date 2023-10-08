import { useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { NavBar } from "../../navBar/NavBar";
import { SectionItem } from "./SectionItem";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";

export function ServiceCreatePage() {
  const [title, setTitle] = useState("");
  const emptySection = { name: "", text: "" };
  const [sections, setSections] = useState([{ ...emptySection }]);

  const navigate = useNavigate();

  function handleClick() {
    setSections((old) => [...old, { ...emptySection }]);
  }

  async function saveService() {
    try {
      const filteredSections = sections.filter(
        (section) => section.name || section.text
      );
      const body = { title, sections: filteredSections };
      const result = await api.post("/services", body);

      if (result.status == 201) {
        const { id } = await result.data;
        navigate(`/services/${id}`);
      }
    } catch (err) {
      // <ModalError />
      console.error(err.message);
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
      {sections.map((section, index) => (
        <SectionItem
          section={section}
          id={section.id}
          key={index}
        ></SectionItem>
      ))}
      <div>
        <button onClick={handleClick} className="big-button bg-gray-500">
          <FaPlus /> Adicionar Seção
        </button>
      </div>
      <div className="flex-row gap-2 mt-auto">
        <button className="big-button bg-gray-500">
          <FaTimes /> Cancelar
        </button>
        <button onClick={saveService} className="big-button bg-red-600">
          <FaCheck /> Salvar
        </button>
      </div>
      <NavBar active={"Serviços"} />
    </div>
  );
}
