import { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        placeholder="Escrever demanda"
        onChange={(e) => setContent(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}
