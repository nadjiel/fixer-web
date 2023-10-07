import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import { ServiceItem } from "./list/ServiceItem";

export function ServicePage() {
  const [service, setService] = useState();
  const { id } = useParams();

  async function getService() {
    const res = await api.get(`/services/service/${id}`); // TODO specify service
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
      <Link to={"/services/service"} className="main-button"> {/* TODO specify service */}
        <IoMdArrowRoundBack />
        Voltar
      </Link>
      <NavBar active={"Serviços"} />
    </div>
  );
}
