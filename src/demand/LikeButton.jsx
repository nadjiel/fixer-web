import { IoHeartCircle } from "react-icons/io5";
import { primaryColor } from "../primaryColor";

export function LikeButton({ count }) {
  return (
    <div className="gap-1 items-center flex-row text-sm">
      <IoHeartCircle color={primaryColor} size={26} />
      {count} apoios
    </div>
  );
}
