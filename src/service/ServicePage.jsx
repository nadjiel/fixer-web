import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import { ServiceItem } from "./list/ServiceItem";
import { api } from "../api";

export function ServicePage() {
  const [service, setService] = useState();
  const { id } = useParams();

  async function getService() {
    const res = await api.get(`/services/${id}`);
    setService(res.data);
  }

  useEffect(() => {
    getService();
  }, []);

  if (!service) {
    return <div>carregando...</div>;
  }

  return (
    <div>
      <h1 className="text-xl text-primary">{service.name}</h1>
      <section className="p-2">
        {service ? (
          <ServiceItem service={service} expanded></ServiceItem>
        ) : (
          <div>carregando...</div>
        )}
      </section>

      <div className="fixed bottom-20 z-10 right-0 p-5">
        <Link
          to={"/services/category/" + service.category}
          className="p-5 px-3 py-2 bg-primary rounded-full text-white font-medium text-base"
        >
          <IoMdArrowRoundBack />
          Voltar
        </Link>
      </div>
      <NavBar active={"Serviços"} />
    </div>
  );
}
