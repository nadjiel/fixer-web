import { useState } from "react";
import { SectionItem } from "./SectionItem";

export function ServiceCreatePage() {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([
    { name: "horarios", content: "de 0 as 11 horas" },
  ]);

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="Preencher título"
        className="font-bold text-lg"
      />
      {sections.map((section) => (
        <SectionItem section={section}></SectionItem>
      ))}
    </div>
  );
}
