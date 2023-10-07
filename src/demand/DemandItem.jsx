import { LikeButton } from "./LikeButton";
import { StatusLabel } from "./StatusLabe";

export function DemandItem({ demand }) {
  return (
    <div className="bg-white p-2 rounded shadow">
      <div>{demand.content}</div>
      <div className="flex-row items-start justify-between">
        <LikeButton count={demand.likesCount} />
        <StatusLabel status={demand.status}></StatusLabel>
      </div>
    </div>
  );
}
