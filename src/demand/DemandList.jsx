import { DemandItem } from "./DemandItem";

export function DemandList({ demands }) {
  return (
    <div className="p-2">
      {demands.map((demand) => {
        return <DemandItem demand={demand} key={demand.id} />;
      })}
    </div>
  );
}
