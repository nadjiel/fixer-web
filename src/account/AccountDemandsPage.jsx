import { useEffect, useState } from "react";
import { DemandList } from "../demand/DemandList";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { useAuth } from "../auth/AuthContext";

export function AccountDemandsPage() {
  const { user } = useAuth();
  const [demands, setDemands] = useState();

  async function getDemands() {
    // TODO use the real route
    const res = await api.get("/demands?userId=" + user.id);
    console.log(res.data);
    setDemands(res.data);
  }

  useEffect(() => {
    getDemands();
  }, []);

  return (
    <div className="items-center">
      <div className="max-w-xl w-full">
        <div className="gap-4">
          <div className="text-primary text-lg">Demandas feitas</div>
          {demands ? (
            <DemandList demands={demands}></DemandList>
          ) : (
            <div>carregando...</div>
          )}
        </div>
      </div>
      <NavBar active={"Conta"} />
    </div>
  );
}
