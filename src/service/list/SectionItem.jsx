export function SectionItem({ section }) {
  return (
    <div className="bg-secondary-300 m-1 p-2">
      <div className="font-medium">{section?.name}</div>
      <div>{section?.text}</div>
    </div>
  );
}
