import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div className="h-10"></div>
      <div className="h-10 flex-row mt-auto text-sm justify-between fixed bottom-0 w-full">
        <Link className="flex-1 text-center p-2" to={"/demands"}>
          Demandas
        </Link>
        <Link className="flex-1 text-center p-2" to={"/services"}>
          Serviços
        </Link>
        <Link className="flex-1 text-center p-2" to={"/account"}>
          Conta
        </Link>
      </div>
    </>
  );
}
