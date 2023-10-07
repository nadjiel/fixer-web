import { CardDeamand } from "../components/CardDemand.jsx"
import { NavBarComponent } from "../navBar/NavBarComponent.jsx";

export const Services = () => {
  return (
    <div>
      <section className="w-full bg-gray">
        <input className="w-11/12" />
        <button>!</button>
      </section>
      <hr />
      <section>
        <h1 className="text-xl">Demandas</h1>
        <CardDeamand />
      </section>
      <NavBarComponent nameActive="demandas" />
    </div>
  );
};
