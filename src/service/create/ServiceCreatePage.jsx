import { useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { NavBar } from "../../navBar/NavBar";
import { SectionItem } from "./SectionItem";
import { api } from "../../api";
// import { ModalError } from "../../modal/ModalError"
import { useNavigate } from "react-router-dom";

export function ServiceCreatePage() {
  const [title, setTitle] = useState("");
  const objVoid = { name: "", text: "", id: "section-0" };
  const [sections, setSections] = useState([objVoid]);

  const navigate = useNavigate();

  function handleClick() {
    setSections((old) => [
      ...old,
      { ...objVoid, id: `section-${sections.length}` },
    ]);
  }

  async function saveService() {
    try {
      const filterSection = sections.map((obj) => {
        console.log(obj);
        const element = document.querySelector(`#${obj.id}`);
        const name = element.querySelector("[name='section-name']").value;
        const text = element.querySelector("[name='section-text']").value;
        return { name, text };
      });

      const body = { title, sections: filterSection };
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
        <button onClick={saveService} className="p-2 rounded text-white flex-1 bg-green-500">
          <FaCheck /> Salvar
        </button>
      </div>
      <NavBar active={"Serviços"} />
    </div>
  );
}
