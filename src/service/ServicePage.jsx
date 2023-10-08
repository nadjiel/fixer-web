import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../navBar/NavBar";
import { ServiceItem } from "./list/ServiceItem";
import { api } from "../api";
import { ResourceButtons } from "../common/ResourceButtons";

export function ServicePage() {
  const [service, setService] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const toEdit = `/services/${id}/edit`;

  async function getService() {
    const res = await api.get(`/services/${id}`);
    setService(res.data);
  }

  async function handleDeleteConfirm() {
    await api.delete("/services/" + id);
    navigate("/services");
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

      <ResourceButtons
        toEdit={toEdit}
        onDeleteConfirm={handleDeleteConfirm}
      ></ResourceButtons>
      <NavBar active={"Serviços"} />
    </div>
  );
}
