import { useEffect, useState } from "react";
import { DemandList } from "../demand/DemandList";
import { api } from "../api";
import { NavBar } from "../navBar/NavBar";
import { useAuth } from "../auth/contexts";
import { Loader } from "../common/pages";
import illustration from "../assets/no-demands.svg"
import { Link } from "react-router-dom";

export function AccountDemandsPage() {
  const [demands, setDemands] = useState(null);
  const { user } = useAuth();

  async function getDemands() {
    const res = await api.get("/demands?user=" + user?.id);

    setDemands(res.data);
  }

  useEffect(() => {
    if(!user) return;

    getDemands();
  }, [user]);

  return (
    <div className="items-center">
      <div className="max-w-xl w-full">
        <div className="gap-4">
          <div className="text-primary text-lg">Demandas feitas</div>
          {
            !demands
              ? <Loader />
              : demands.length === 0
              ? (
                <div className="text-center items-center">
                  <img src={illustration} className="max-w-md w-full" />
                  <h2 className="text-xl font-bold">Tudo OK por aqui!</h2>
                  <p>
                    Você não criou nenhuma demanda ainda!{" "}
                    <Link
                      to="/demands/create"
                      className="inline text-primary hover:underline"
                    >
                      Crie uma por aqui.
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
