import { Link } from "react-router-dom";
import { ServiceItem } from "./ServiceItem";

export function ServiceList({ services }) {
  return (
    <div className="gap-2">
      {services.map((service) => (
        <Link to={`/services/service/${service.id}`}> {/* TODO specify service */}
          <ServiceItem className="cursor-pointer" service={service} />
        </Link>
      ))}
    </div>
  );
}
