import { IoHeartCircle } from "react-icons/io5";
import { primaryColor } from "../primaryColor";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { api } from "../api";
import { AiOutlineLoading3Quarters as LoadingIcon } from "react-icons/ai";

export function LikeButton({ demand }) {
  const [supported, setSupported] = useState(demand.supported_by_logged_user);
  const [supports, setSupports] = useState(demand.supports);
  const [loading, setLoading] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(true);

      if (supported) {
        await api.post(`/demands/${demand.id}/unsupport/`);
        
        setSupported(false);
        setSupports(s => s - 1);
      } else {
        await api.post(`/demands/${demand.id}/support/`);
        
        setSupported(true);
        setSupports(s => s + 1);
      }
    } catch(error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="gap-1 items-center flex-row text-sm hover:bg-black/10 rounded p-2"
    >
      {
        loading
          ? <LoadingIcon color={primaryColor} size={26} className="animate-spin p-1" />
          : supported
          ? <IoHeartCircle color={primaryColor} size={26} />
          : <FaHeart color={primaryColor} size={26} className="scale-[.6]" />
      }
      {supports} apoios
    </button>
  );
}
