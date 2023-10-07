import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { NavBar } from "../../navBar/NavBar";
import { ServiceList } from "./ServiceList";
import { AddServiceButton } from "./AddServiceButton";

export function ServicesPage() {
  const { category } = useParams();
  const [services, setServices] = useState();

  async function getServices() {
    const res = await api.get(`/services?category=${category}`);
    setServices(res.data);
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <hr />
      <section className="p-2">
        <h1 className="text-xl text-primary">{category}</h1>
        {services ? (
          <ServiceList services={services}></ServiceList>
        ) : (
          <div>carregando...</div>
        )}
      </section>
      {/* TODO admin only */}
      <div className="fixed bottom-20 z-10 right-0 p-5">
        <AddServiceButton category={ category } />
      </div>
      <NavBar active={"Serviços"} />
    </div>
  );
}
