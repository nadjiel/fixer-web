import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DemandItem } from "./DemandItem";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { FaPen, FaTrash } from "react-icons/fa";
import { DeleteModal } from "./DeleteModal";

export function DemandPage() {
  const [open, setOpen] = useState(false);
  const [demand, setDemand] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  async function getDemand() {
    const res = await api.get(`/demands/${id}`);
    setDemand(res.data);
  }

  useEffect(() => {
    getDemand();
  }, []);

  function close() {
    setOpen(false);
  }
  async function handleConfirm() {
    await api.delete("/demands/" + id);
    navigate("/demands");
  }

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
          onClick={() => setOpen(true)}
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
      {open && (
        <DeleteModal isOpen={true} close={close} onConfirm={handleConfirm} />
      )}
    </div>
  );
}
