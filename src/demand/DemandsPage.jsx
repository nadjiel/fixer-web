import { useEffect, useState } from "react";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { DemandList } from "./DemandList";
import { AddDemandButton } from "./AddDemandButton";

export function DemandsPage() {
  const [demands, setDemands] = useState();

  async function getDemands() {
    const res = await api.get("/demands");
    const data =  res.data;
    const sorted = data.sort((a, b) => b.likesCount - a.likesCount);
    setDemands(sorted);
  }

  useEffect(() => {
    getDemands();
  }, []);

  return (
    <div className="items-center">
      <div className="max-w-xl w-full">
        {demands ? <DemandList demands={demands} /> : <div>carregando</div>}
        <div className="fixed bottom-20 z-10 right-0 p-5">
          <AddDemandButton />
        </div>
      </div>
      <NavBar active={"Demandas"} />
    </div>
  );
}
