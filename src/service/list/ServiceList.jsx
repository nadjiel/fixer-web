import { ServiceItem } from "./ServiceItem";

export function ServiceList({ services }) {
  return (
    <div className="gap-2">
      {services.map((service) => (
        <ServiceItem service={service} />
      ))}
    </div>
  );
}
