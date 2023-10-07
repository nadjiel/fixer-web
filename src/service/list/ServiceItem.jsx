import { SectionItem } from "./SectionItem";

export function ServiceItem({ service }) {
  return (
    <div className="rounded shadow p-2">
      <div>{service.title}</div>
      <div>
        {service.sections.map((section) => (
          <SectionItem section={section}></SectionItem>
        ))}
      </div>
    </div>
  );
}
