import { Link } from "react-router-dom";
import { DemandItem } from "./DemandItem";

export function DemandList({ demands }) {
  return (
    <div className="gap-2 p-2">
      {demands.map((demand) => {
        return <DemandItem demand={demand} key={demand.id} />;
      })}
    </div>
  );
}
