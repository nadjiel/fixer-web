import { ServiceItem } from "./ServiceItem";

export function ServiceList({ services }) {
  return (
    <div>
      {services.map((service) => (
        <ServiceItem service={service} />
      ))}
    </div>
  );
}
