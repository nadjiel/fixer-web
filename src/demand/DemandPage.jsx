import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DemandItem } from "./DemandItem";
import { api } from "../api";

export function DemandPage() {
  const [demand, setDemand] = useState();
  const params = useParams();

  async function getDemand() {
    const res = await api.get(`/demands/${params.code}`);
    setDemand(res.data);
  }

  useEffect(() => {
    getDemand();
  }, []);

  return demand ? <DemandItem demand={demand} /> : <div>carregando</div>;
}
