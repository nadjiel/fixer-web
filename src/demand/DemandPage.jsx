import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DemandItem } from "./DemandItem";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { FaPen, FaTrash } from "react-icons/fa";
import { Modal } from "../navBar/Modal";
import { DeleteModal } from "./DeleteModal";

export function DemandPage() {
  const [demand, setDemand] = useState();
  const params = useParams();

  async function getDemand() {
    const res = await api.get(`/demands/${params.id}`);
    setDemand(res.data);
  }

  useEffect(() => {
    getDemand();
  }, []);

  if (!demand) {
    return <div>carregando</div>;
  }

  return (
    <div className="gap-2 p-2">
      <h2 className="text-primary text-lg font-medium">Demanda</h2>
      <DemandItem demand={demand} />
      <NavBar active={"Demandas"} />
      <div className="fixed bottom-20 z-10 right-0 p-5 w-full flex-row justify-between">
        <button
          to={"/demands/" + demand.id + "/edit"}
          className="px-3 py-2 bg-red-500 text-white rounded-full font-medium text-base"
        >
          <FaTrash /> Apagar
        </button>
        <Link
          to={"/demands/" + demand.id + "/edit"}
          className="px-3 py-2 bg-secondary-400 rounded-full font-medium text-base"
        >
          <FaPen /> Editar
        </Link>
      </div>
      <DeleteModal isOpen={true}></DeleteModal>
    </div>
  );
}
