import { IoHeartCircle } from "react-icons/io5";
import { NavBar } from "../navBar/NavBar";
import { BiCommentError } from "react-icons/bi";

export function AccountPage() {
  return (
    <div className="items-center gap-10">
      <div className="items-center">
        <img
          width={64}
          className="rounded-full"
          src="https://github.com/yolisses.png"
        />
        <h2 className="font-bold text-xl text-primary">
          Ulisses Albuquerque Pereira
        </h2>
        <div className="text-sm text-primary">
          albuquerque.ulisses@academico.ifpb.edu.br
        </div>
      </div>
      <div className="items-center">
        <div className="font-semibold">Estatísticas</div>
        <div className="items-center gap-1 flex-row">
          <IoHeartCircle color="#B3261E" size={26} />
          Total de demandas apoiadas: <div className="font-medium">15</div>
        </div>
        <div className="items-center gap-1 flex-row">
          <BiCommentError color="#B3261E" size={26} />
          Total de demandas feitas: <div className="font-medium">42</div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
