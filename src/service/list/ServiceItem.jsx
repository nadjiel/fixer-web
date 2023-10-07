import { SectionItem } from "./SectionItem";

export function ServiceItem({ service }) {
  return (
    <div className="rounded shadow p-2">
      <div>{service.title}</div>
      <div>
        <SectionItem section={ service.sections[0] }></SectionItem>
      </div>
    </div>
  );
}
