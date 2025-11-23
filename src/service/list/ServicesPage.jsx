import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { NavBar } from "../../navBar/NavBar";
import { ServiceList } from "./ServiceList";
// import { AddServiceButton } from "./AddServiceButton";
import { Loader } from "../../common/pages";
import illustration from "../../assets/no-demands.svg"

export function ServicesPage() {
  const { category } = useParams();
  const [services, setServices] = useState(null);

  async function getServices() {
    const res = await api.get(`services?category=${category}`);

    setServices(res.data);
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="flex-1">
      <hr />
      <section className="p-2 flex flex-1 flex-col">
        <h1 className="text-xl text-primary">{category}</h1>
        {
          !services
            ? <Loader />
            : services.length === 0
            ? (
              <div className="text-center items-center">
                <img src={illustration} className="max-w-md w-full" />
                <h2 className="text-xl font-bold">Sem serviços</h2>
                <p>Não temos serviços dessa categoria ainda.</p>
              </div>
            )
            : <ServiceList services={services} />
        }
      </section>
      {/* TODO: admin only */}
      {/* <div className="fixed bottom-20 z-10 right-0 p-5">
        <AddServiceButton category={ category } />
      </div> */}
      <NavBar active={"Serviços"} />
    </div>
  );
}
