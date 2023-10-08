import { IoHeartCircle } from "react-icons/io5";
import { primaryColor } from "../primaryColor";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { api } from "../api";

export function LikeButton({ count, demand }) {
  const [pressed, setPressed] = useState(demand.supported_by_logged_user);

  async function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (pressed) {
    } else {
      await api.post(`/supports/`, {
        user: 1,
        demand: demand.id,
      });
    }

    setPressed(!pressed);
  }

  const displayCount = (count || 0) + pressed ? 1 : 0;

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
      {displayCount} apoios
    </button>
  );
}
