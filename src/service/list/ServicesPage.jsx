import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api";
import { NavBar } from "../../navBar/NavBar";
import { ServiceList } from "./ServiceList";
import { AddServiceButton } from "./AddServiceButton";

export function ServicesPage() {
  const [services, setServices] = useState();
  const { service } = useParams();

  async function getServices() {
    const res = await api.get(`/services/${service}`);
    setServices(res.data);
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <hr />
      <section className="p-2">
        <h1 className="text-xl text-primary">{service}</h1>
        {services ? (
          <ServiceList services={services}></ServiceList>
        ) : (
          <div>carregando...</div>
        )}
      </section>
      {/* TODO admin only */}
      <div className="fixed bottom-20 z-10 right-0 p-5">
        <AddServiceButton />
      </div>
      <NavBar active={"Serviços"} />
    </div>
  );
}
