import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { api } from "../api";

export function DemandInput({ reload }) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await api.post("/demands", { content });
    console.log(res.data);
    reload();
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 flex flex-col">
      <input
        type="text"
        value={content}
        className="p-2"
        placeholder="Escrever demanda"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="main-button">
        <FaPaperPlane />
        Enviar
      </button>
    </form>
  );
}
