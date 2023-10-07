import { useEffect, useState } from "react";
import { api } from "../api";

export function DevPage() {
  const [demands, setDemands] = useState();

  async function getDemands() {
    const res = await api.get("/demands");
    console.log(res.data);
    setDemands(res.data);
  }

  useEffect(() => {
    getDemands();
  }, []);

  return <div>hello dev</div>;
}
