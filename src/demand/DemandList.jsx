import { Link } from "react-router-dom";
import { DemandItem } from "./DemandItem";

export function DemandList({ demands }) {
  return (
    <div className="gap-2 p-2">
      {demands.map((demand) => {
        return (
          <Link to={`./${demand.id}`} className="cursor-pointer">
            <DemandItem demand={demand} key={demand.id} />
          </Link>
        )
      })}
    </div>
  );
}
