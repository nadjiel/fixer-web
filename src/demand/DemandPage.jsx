import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DemandItem } from "./DemandItem";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { ResourceButtons } from "../common/ResourceButtons";

export function DemandPage() {
  const [demand, setDemand] = useState();
  const navigate = useNavigate();

  const { id } = useParams();
  const toEdit = "/demands/" + id + "/edit";

  async function getDemand() {
    const res = await api.get(`/demands/${id}`);
    setDemand(res.data);
  }

  useEffect(() => {
    getDemand();
  }, []);

  async function handleDeleteConfirm() {
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
      <ResourceButtons
        toEdit={toEdit}
        hideEdit={true}
        onDeleteConfirm={handleDeleteConfirm}
      ></ResourceButtons>
    </div>
  );
}
