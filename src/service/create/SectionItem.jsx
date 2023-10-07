import { useState } from "react";

export function SectionItem({ section }) {
  const [name, setName] = useState(section.name);
  const [content, setContent] = useState(section.content);

  return (
    <div className="p-2 rounded shadow bg-white">
      <input
        required
        type="text"
        value={name}
        className="font-medium"
        placeholder="Nome da seção"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        required
        type="text"
        value={content}
        placeholder="Conteúdo da seção"
        onChange={(e) => setContent(e.target.value)}
      ></input>
    </div>
  );
}
