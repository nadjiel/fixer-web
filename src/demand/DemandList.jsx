import { DemandItem } from "./DemandItem";

export function DemandList({ demands }) {
  return (
    <div>
      {demands.map((demand) => {
        return <DemandItem demand={demand} key={demand.id} />;
      })}
    </div>
  );
}
