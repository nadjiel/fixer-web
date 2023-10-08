import { Link } from "react-router-dom";
import { SectionItem } from "./SectionItem";

export function ServiceItem({ service, expanded }) {
  return (
    <Link to={`/services/${service.id}`}>
      <div className="bg-secondary-200 rounded-xl p-2 w-full align-center">
        <div className="text-xl text-primary">{service.title}</div>
        <div className="rounded-xl w-full align-center gap-3s">
          {expanded ? (
            service?.sections.map((section, index) => (
              <SectionItem section={section} key={index}></SectionItem>
            ))
          ) : (
            <SectionItem section={service.sections[0]}></SectionItem>
          )}
        </div>
      </div>
    </Link>
  );
}
