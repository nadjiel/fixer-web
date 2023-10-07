import { BiCommentError } from "react-icons/bi";
import { IoHeartCircle } from "react-icons/io5";
import { primaryColor } from "../primaryColor";

export function AccountStatistics({ user }) {
  return (
    <div className="items-center gap-2">
      <div className="font-semibold">Estatísticas</div>
      <div className="items-center gap-1 flex-row">
        <IoHeartCircle color={primaryColor} size={26} />
        Total de demandas apoiadas:{" "}
        <div className="font-medium">{user.demandsCount}</div>
      </div>
      <div className="items-center gap-1 flex-row">
        <BiCommentError color={primaryColor} size={26} />
        Total de demandas feitas:{" "}
        <div className="font-medium">{user.likesCount}</div>
      </div>
    </div>
  );
}
