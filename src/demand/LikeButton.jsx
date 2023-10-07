import { IoHeartCircle } from "react-icons/io5";
import colors from "tailwindcss/colors"

export function LikeButton({ count }) {
  const { primary } = colors
  return (
    <div className="gap-1 items-center flex-row text-sm">
      <IoHeartCircle color={primary} size={26} />
      {count} apoios
    </div>
  );
}
