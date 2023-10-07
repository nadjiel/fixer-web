import { useEffect, useState } from "react";
import { api } from "../api";
import { NavBar } from "../nav/NavBar";
import { DemandInput } from "./DemandInput";
import { DemandList } from "./DemandList";

export function DemandsPage() {
  const [demands, setDemands] = useState();

  async function getDemands() {
    const res = await api.get("/demands");
    console.log(res.data);
    setDemands(res.data);
  }

  useEffect(() => {
    getDemands();
  }, []);

  return (
    <div>
      <DemandInput reload={getDemands} />
      {demands ? <DemandList demands={demands} /> : <div>carregando</div>}
      <NavBar />
    </div>
  );
}
