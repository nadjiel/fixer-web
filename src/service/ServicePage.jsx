import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import { ServiceItem } from "./list/ServiceItem";

// Receber o id

export function ServicePage() {
  const [service, setService] = useState();

  async function getService() {
    const res = await api.get("/service/" /* + id */);
    setService(res.data);
  }

  useEffect(() => {
    getService();
  }, []);

  return (
    <div>
      <section className="p-2">
        {service ? (
            <ServiceItem service={service} expanded></ServiceItem>
          ) : (
            <div>carregando...</div>
          )}
      </section>
      <Link to={"/"} className="main-button">
        <IoMdArrowRoundBack />
        Voltar
      </Link>
      <NavBar active={"Serviços"} />
    </div>
  );
}
