import { useState } from "react";

export function SectionItem({ section }) {
  const [state, setState] = useState();

  function refresh() {
    setState(Math.random());
  }

  return (
    <div className="p-2 rounded shadow bg-white">
      <input
        required
        type="text"
        value={section.name}
        className="font-medium"
        placeholder="Nome da seção"
        onChange={(e) => {
          section.name = e.target.value;
          refresh();
        }}
      ></input>
      <input
        required
        type="text"
        name="section-text"
        value={section.text}
        placeholder="Conteúdo da seção"
        onChange={(e) => {
          section.text = e.target.value;
          refresh();
        }}
      ></input>
    </div>
  );
}
