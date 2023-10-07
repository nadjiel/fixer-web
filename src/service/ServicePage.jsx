import { useEffect, useState } from "react";
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
    <div className="gap-2">
      {service ? (
          <ServiceItem service={service} expanded></ServiceItem>
        ) : (
          <div>carregando...</div>
        )}
    </div>
  );
}
