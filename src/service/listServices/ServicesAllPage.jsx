import { ServiceItem } from "./ServiceItem";
import { NavBar } from "../../navBar/NavBar";

export function ServicesAllPage() {
  const listServices = ["Saúde", "Desenvolvimento", "Educação"];
  return (
    <>
      <div className="gap-3 px-5 py-4">
        <h1 className="text-xl text-primary">Serviços ofertados</h1>
        <div className="flex flex-col gap-5">
          {listServices.map((item, index) => (
            <ServiceItem key={index} data={item} />
          ))}
        </div>
      </div>
      <NavBar active={"Serviços"} />
    </>
  );
}
