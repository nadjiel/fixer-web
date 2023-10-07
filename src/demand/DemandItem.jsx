import { LikeButton } from "./LikeButton";
import { StatusLabel } from "./StatusLabe";

export function DemandItem({ demand }) {
  return (
    <div className="bg-secondary-200 p-2 rounded-lg">
      <div>{demand.text}</div>
      <div className="flex-row items-start justify-between">
        <LikeButton count={demand.likesCount} />
        <StatusLabel status={demand.status}></StatusLabel>
      </div>
    </div>
  );
}
