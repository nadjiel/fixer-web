import { useEffect, useState } from "react";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { DemandInput } from "./DemandInput";
import { DemandList } from "./DemandList";
import { CreateDemandButton } from "./CreateDemandButton";

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
    <div className="items-center">
      <div className="max-w-xl w-full">
        {demands ? <DemandList demands={demands} /> : <div>carregando</div>}
        <div className="fixed bottom-20 z-10 right-10">
          <CreateDemandButton />
        </div>
      </div>
      <NavBar active={"Demandas"} />
    </div>
  );
}
