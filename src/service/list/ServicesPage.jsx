// import { CardDeamand } from "../components/CardDemand.jsx"

import { useEffect, useState } from "react";
import { api } from "../../api";
import { NavBar } from "../../nav/NavBar";
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
      <section className="w-full bg-gray">
        <input className="w-11/12" />
        <button>!</button>
      </section>
      <hr />
      <section className="p-2">
        {services ? (
          <ServiceList services={services}></ServiceList>
        ) : (
          <div>carregando...</div>
        )}
      </section>
      <NavBar />
    </div>
  );
}
