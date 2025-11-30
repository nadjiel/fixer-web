import { useEffect, useState } from "react";
import { DemandList } from "../demand/DemandList";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { Loader } from "../common/pages";
import illustration from "../assets/no-demands.svg"
import { Link } from "react-router-dom";

export function AccountLikesPage() {
  const [demands, setDemands] = useState(null);

  async function getDemands() {
    const res = await api.get("/demands?supported_by_me=true");
    
    setDemands(res.data);
  }

  useEffect(() => {
    getDemands();
  }, []);

  return (
    <div className="items-center flex-1">
      <div className="max-w-xl w-full flex-1">
        <div className="gap-4 flex-1">
          <div className="text-primary text-lg">Demandas apoiadas</div>
          {
            !demands
              ? <Loader />
              : demands.length === 0
              ? (
                <div className="text-center items-center">
                  <img src={illustration} className="max-w-md w-full" />
                  <h2 className="text-xl font-bold">Tudo OK por aqui!</h2>
                  <p>
                    Você não apoiou nenhuma demanda ainda!{" "}
                    <Link
                      to="/demands"
                      className="inline text-primary hover:underline"
                    >
                      Veja e apoie demandas por aqui.
                    </Link>
                  </p>
                  <Link
                    to="/account"
                    className="mt-4 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    Voltar à sua página
                  </Link>
                </div>
              )
              : <DemandList demands={demands} />
          }
        </div>
      </div>
      <NavBar active={"Conta"} />
    </div>
  );
}
