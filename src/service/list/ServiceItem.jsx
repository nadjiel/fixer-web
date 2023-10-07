import { SectionItem } from "./SectionItem";

export function ServiceItem({ service, expanded }) {
  return (
    <div className="rounded shadow p-2">
      <div>{service.title}</div>
      <div>
        {expanded ? (
          service.sections.map( section => <SectionItem section={ section }></SectionItem>)
        ) : (
          <SectionItem section={ service.sections[0] }></SectionItem>
        )}
      </div>
    </div>
  );
}
