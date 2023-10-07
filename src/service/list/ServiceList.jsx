import { ServiceItem } from "./ServiceItem";

export function ServiceList({ services }) {
  if (services.length === 0) {
    return <div>Nenhum item encontrado</div>;
  }

  return (
    <div className="gap-2">
      {services.map((service) => (
        <ServiceItem className="cursor-pointer" service={service} />
      ))}
    </div>
  );
}
