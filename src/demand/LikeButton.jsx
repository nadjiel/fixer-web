import { IoHeartCircle } from "react-icons/io5";

export function LikeButton({ count }) {
  return (
    <div className="gap-1 items-center flex-row text-sm">
      <IoHeartCircle color="#B3261E" size={26} />
      {count} apoios
    </div>
  );
}
