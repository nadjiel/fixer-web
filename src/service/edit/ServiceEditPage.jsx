import { useEffect, useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { NavBar } from "../../navBar/NavBar";
import { SectionItem } from "../create/SectionItem";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

export function ServiceEditPage() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const emptySection = { name: "", text: "" };
  const [sections, setSections] = useState([{ ...emptySection }]);

  const navigate = useNavigate();

  function handleClick() {
    setSections((old) => [...old, { ...emptySection }]);
  }

  async function getService() {
    const res = await api.get("/services/" + id);
    const service = res.data;
    setTitle(service.title);
    setSections(service.sections);
  }

  useEffect(() => {
    getService();
  }, []);

  async function saveService() {
    const filteredSections = sections.filter(
      (section) => section.name || section.text
    );
    const service = { title, sections: filteredSections };
    const res = await api.post("/services", service);
    const { id } = res.data;
    navigate(`/services/${id}`);
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
