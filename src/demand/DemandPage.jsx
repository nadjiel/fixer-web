import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DemandItem } from "./DemandItem";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { ResourceButtons } from "../common/ResourceButtons";
import { Loader } from "../common/pages";
import illustration from "../assets/not-found.svg"

export function DemandPage() {
  const [demand, setDemand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const toEdit = "/demands/" + id + "/edit";

  async function getDemand() {
    try {
      const res = await api.get(`/demands/${id}`);
      
      setDemand(res.data);
    } catch(error) {
      if(error.response.status == 404) {
        setError("Demanda não encontrada!");
      } else {
        setError("Ocorreu um erro inesperado!");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDemand();
  }, []);

  async function handleDeleteConfirm() {
    await api.delete("/demands/" + id);
    navigate("/demands");
  }

  return (
    <div className="flex-1 gap-2 p-2">
      {
        loading
          ? <Loader />
          : error
          ? <div className="items-center gap-2">
            <img src={illustration} className="max-w-md w-full" />
            <h2 className="text-xl font-bold">Sinto muito, mas obtivemos um erro!</h2>
            <p>{error}</p>
          </div>
          : <>
            <h2 className="text-primary text-lg font-medium">Demanda</h2>
            <DemandItem demand={demand} />
            <ResourceButtons
              toEdit={toEdit}
              hideEdit={true}
              onDeleteConfirm={handleDeleteConfirm}
            ></ResourceButtons>
          </>
      }
      <NavBar active={"Demandas"} />
    </div>
  );
}
