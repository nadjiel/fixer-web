import { useEffect, useState } from "react";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { DemandList } from "./DemandList";
import { AddDemandButton } from "./AddDemandButton";
import { Loader } from "../common/pages";
import illustration from "../assets/no-demands.svg"

export function DemandsPage() {
  const [demands, setDemands] = useState(null);

  async function getDemands() {
    const res = await api.get("/demands/");
    const data =  res.data;
    const sorted = data.sort((a, b) => b.likesCount - a.likesCount);
    setDemands(sorted);
  }

  useEffect(() => {
    getDemands();
  }, []);

  return (
    <div className="flex-1 items-center">
      <div className="flex-1 max-w-xl w-full">
        {
          !demands
            ? <Loader />
            : demands.length === 0
            ? (
              <div className="text-center items-center">
                <img src={illustration} className="max-w-md w-full" />
                <h2 className="text-xl font-bold">Tudo OK por aqui!</h2>
                <p>Não há demandas cadastradas.</p>
              </div>
            )
            : <DemandList demands={demands} />
        }
        <div className="fixed bottom-20 z-10 right-0 p-5">
          <AddDemandButton />
        </div>
      </div>
      <NavBar active={"Demandas"} />
    </div>
  );
}
