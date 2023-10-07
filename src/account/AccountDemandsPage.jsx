import { useEffect, useState } from "react";
import { DemandList } from "../demand/DemandList";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";

export function AccountDemandsPage() {
  const [demands, setDemands] = useState();

  async function getDemands() {
    // TODO use the real route
    const res = await api.get("/demands");
    console.log(res.data);
    setDemands(res.data);
  }

  useEffect(() => {
    getDemands();
  }, []);

  if (!demands) {
    return <div>carregando...</div>;
  }

  return (
    <div className="items-center">
      <div className="max-w-xl w-full">
        {demands ? <DemandList demands={demands} /> : <div>carregando</div>}
        <div className="gap-4">
          <div className="text-primary text-lg">Demandas feitas</div>
          <DemandList demands={demands}></DemandList>
        </div>
      </div>
      <NavBar active={"Demandas"} />
    </div>
  );
}
