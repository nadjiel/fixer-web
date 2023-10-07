import { NavBar } from "../navBar/NavBar";
import { BiCommentError, BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { useEffect, useState } from "react";
import { api } from "../api";
import { AccountStatistics } from "./AccountStatistics";

export function AccountPage() {
  const [user, setUser] = useState();

  async function getUser() {
    const res = await api.get("/me");
    setUser(res.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <div>carregando...</div>;
  }

  return (
    <div className="items-center gap-10 p-2">
      <div className="items-center">
        <img
          width={64}
          height={64}
          className="rounded-full"
          src="https://github.com/yolisses.png"
        />
        <h2 className="font-bold text-xl text-primary">{user.name}</h2>
        <div className="text-sm text-primary">{user.email}</div>
      </div>
      <AccountStatistics user={user} />
      <div className="text-primary gap-2">
        <Link
          to="/accountLikes"
          className="justify-center bg-secondary-200 p-2 rounded-lg"
        >
          <BiHeart /> Demandas apoiadas
        </Link>
        <Link
          to="/accountDemands"
          className="justify-center bg-secondary-default p-2 rounded-lg"
        >
          <BiCommentError /> Demandas feitas
        </Link>
        <Link
          to="/account/edit"
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
      <NavBar active={"Conta"} />
    </div>
  );
}
