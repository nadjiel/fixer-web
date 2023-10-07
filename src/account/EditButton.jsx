export function EditButton({ callback, Icon, name, color }) {
  return (
    <button onClick={callback} className={`${"flex-grow flex justify-center px-3 py-2 rounded-3xl text-secondary-100"} ${color}`}>
      <Icon size={24} />
      <p className="text-sm">{name}</p>
    </button>
  );
}
