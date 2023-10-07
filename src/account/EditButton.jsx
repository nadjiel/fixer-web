export function EditButton({ callback, Icon, name }) {
  return (
    <button onClick={callback} className="flex gap-2 py-2.5 py-8">
      <Icon color="#fff" size={24} />
      <p className="text-sm text-secondary-100">{name}</p>
    </button>
  );
}
