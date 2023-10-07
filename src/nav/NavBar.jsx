import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="flex-row mt-auto text-sm justify-between">
      <Link className="flex-1 text-center" to={"/demands"}>
        Demandas
      </Link>
      <Link className="flex-1 text-center" to={"/services"}>
        Serviços
      </Link>
      <Link className="flex-1 text-center" to={"/account"}>
        Conta
      </Link>
    </div>
  );
}
