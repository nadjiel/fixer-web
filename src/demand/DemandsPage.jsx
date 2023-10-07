import { useEffect, useState } from "react";
import { api } from "../api";
import { DemandInput } from "./DemandInput";
import { DemandList } from "./DemandList";
import { NavBarComponent } from "../navBar/NavBarComponent";

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
      <NavBarComponent />
    </div>
  );
}
