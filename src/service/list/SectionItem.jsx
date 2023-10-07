export function SectionItem({ section }) {
  return (
    <div className="p-2">
      <div className="font-medium">{section.name}</div>
      <div className="">{section.text}</div>
    </div>
  );
}
