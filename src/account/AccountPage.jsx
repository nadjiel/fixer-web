import { IoHeartCircle } from "react-icons/io5";
import { NavBar } from "../navBar/NavBar";
import { BiCommentError, BiHeart } from "react-icons/bi";
import { primaryColor } from "../primaryColor";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";

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
          <IoHeartCircle color={primaryColor} size={26} />
          Total de demandas apoiadas: <div className="font-medium">15</div>
        </div>
        <div className="items-center gap-1 flex-row">
          <BiCommentError color={primaryColor} size={26} />
          Total de demandas feitas: <div className="font-medium">42</div>
        </div>
      </div>

      <div className="text-primary gap-2">
        <Link
          to="/"
          className="justify-center bg-secondary-200 p-2 rounded-lg"
        />
          <BiHeart /> Demandas apoiadas
        </Link>{" "}
        <Link
          to="/"
          className="justify-center bg-secondary-default p-2 rounded-lg"
        >
          <BiCommentError /> Demandas feitas
        </Link>
        <Link
          to="/"
          className="justify-center bg-secondary-default p-2 rounded-lg"
        >
          <HiOutlinePencil /> Editar conta
        </Link>
        <Link
          to="/"
          className="justify-center bg-primary text-white p-2 rounded-lg"
        >
          <MdLogout /> Sair
        </Link>
      </div>
      <NavBar />
    </div>
  );
}
