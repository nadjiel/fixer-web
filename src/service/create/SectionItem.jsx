import { useState } from "react";

export function SectionItem({ section }) {
  const [name, setName] = useState(section.name);
  const [content, setContent] = useState(section.content);

  return (
    <div>
      <input
        type="text"
        value={name}
        className="font-medium"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
    </div>
  );
}
