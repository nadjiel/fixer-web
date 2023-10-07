import { CategoryItem } from "./CategoryItem";
import { NavBar } from "../../navBar/NavBar";
import { useEffect, useState } from "react";
import { api } from "../../api";

export function ServiceCategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const main = async () => {
      const result = await api.get("/categorias");
      setCategories(await result.data);
    };
    main();
  }, []);

  return (
    <>
      <div className="gap-3 px-5 py-4">
        <h1 className="text-xl text-primary font-semibold">Serviços ofertados</h1>
        <div className="flex flex-col gap-5">
          {categories.map((item) => (
            <CategoryItem key={item.id} data={item.name} />
          ))}
        </div>
      </div>
      <NavBar active={"Serviços"} />
    </>
  );
}
