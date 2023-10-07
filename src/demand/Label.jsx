export function Label({ text, color, background }) {
  return (
    <div
      style={{ background, color }}
      className="px-3 rounded-full text-sm font-medium"
    >
      {text}
    </div>
  );
}
