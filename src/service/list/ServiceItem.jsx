import { SectionItem } from "./SectionItem";

export function ServiceItem({ service, expanded }) {
  return (
    <div className="bg-[#EAF1F9] rounded-xl py-8 px-6 w-full align-center gap-3">
      <div className="text-xl text-primary">{service.title}</div>
      <div className="bg-[#F4F8FC] rounded-xl py-8 px-6 w-full align-center gap-3s">
        {expanded ? (
          service.sections.map( section => <SectionItem section={ section }></SectionItem>)
        ) : (
          <SectionItem section={ service.sections[0] }></SectionItem>
        )}
      </div>
    </div>
  );
}
