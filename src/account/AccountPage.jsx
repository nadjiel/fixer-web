import { NavBar } from "../navBar/NavBar";
import { BiCommentError, BiHeart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { FaUser as UserIcon } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../api";
import { AccountStatistics } from "./AccountStatistics";
import { Loader } from "../common/pages";
import { signout } from "../auth/lib"

export function AccountPage() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  async function getUser() {
    const res = await api.get("/users/me/");

    setUser(res.data);
  }
  
  const handleSignout = () => {
    signout();
    navigate("/signin");
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return <Loader />;

  return (
    <div className="items-center gap-10 p-2">
      <div className="items-center">
        <UserIcon className="w-16 h-16 p-2 mb-2 rounded-full bg-primary text-white" />
        <h2 className="font-bold text-xl text-primary">{user.name}</h2>
        <div className="text-sm text-primary">{user.email}</div>
      </div>
      <AccountStatistics user={user} />
      <div className="text-primary gap-2">
        <Link
          to="/my-likes"
          className="justify-center bg-secondary-200 p-2 rounded-lg"
        >
          <BiHeart /> Demandas apoiadas
        </Link>
        <Link
          to="/my-demands"
          className="justify-center bg-secondary-200 p-2 rounded-lg"
        >
          <BiCommentError /> Demandas feitas
        </Link>
        <Link
          to="/account/edit"
          className="justify-center bg-secondary-200 p-2 rounded-lg"
        >
          <HiOutlinePencil /> Editar conta
        </Link>
        <button
          onClick={handleSignout}
          className="justify-center bg-primary text-white p-2 rounded-lg"
        >
          <MdLogout /> Sair
        </button>
      </div>
      <NavBar active={"Conta"} />
    </div>
  );
}
