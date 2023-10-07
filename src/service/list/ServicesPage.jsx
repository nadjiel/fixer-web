import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { NavBar } from "../../navBar/NavBar";
import { ServiceList } from "./ServiceList";

export function ServicesPage() {
  const [services, setServices] = useState();

  async function getServices() {
    const res = await api.get("/services");
    setServices(res.data);
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      {/* TODO admin only */}
      <Link to={"/services/create"} className="main-button">
        <FaPlus />
        Adicionar Serviço
      </Link>
      <hr />
      <section className="p-2">
        {services ? (
          <ServiceList services={services}></ServiceList>
        ) : (
          <div>carregando...</div>
        )}
      </section>
      <NavBar active={"services"} />
    </div>
  );
}
