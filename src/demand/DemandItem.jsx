export function DemandItem({ demand }) {
  return (
    <div className="bg-white p-2 rounded shadow">
      <div>{demand.content}</div>
      <div className="flex-row items-start">
        <button>like</button>
      </div>
    </div>
  );
}
