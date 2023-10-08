import { Link } from "react-router-dom";
import { LikeButton } from "./LikeButton";
import { StatusLabel } from "./StatusLabe";

export function DemandItem({ demand }) {
  return (
    <Link
      to={`/demands/${demand.id}`}
      className="bg-secondary-200 p-2 rounded-lg cursor-pointer flex flex-col items-start hover:outline outline-gray-300 outline-2 hover:z-10"
    >
      <div>{demand.text}</div>
      <div className="flex-row items-start justify-between self-stretch">
        <LikeButton demand={demand} />
        <StatusLabel status={demand.status}></StatusLabel>
      </div>
    </Link>
  );
}
