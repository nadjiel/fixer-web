import { IoHeartCircle } from "react-icons/io5";
import { primaryColor } from "../primaryColor";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export function LikeButton({ count }) {
  const [pressed, setPressed] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setPressed(!pressed);
  }

  return (
    <button
      onClick={handleClick}
      className="gap-1 items-center flex-row text-sm hover:bg-black/10 rounded p-2"
    >
      {pressed ? (
        <IoHeartCircle color={primaryColor} size={26} />
      ) : (
        <FaHeart color={primaryColor} size={26} className="scale-[.6]" />
      )}
      {count || 0} apoios
    </button>
  );
}
