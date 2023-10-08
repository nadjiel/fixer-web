import { CategoryItem } from "./CategoryItem";
import { NavBar } from "../../navBar/NavBar";
import { categories } from "./categories";

export function ServiceCategoriesPage() {
  return (
    <>
      <div className="gap-3 px-5 py-4">
        <h1 className="text-xl text-primary font-semibold">
          Serviços ofertados
        </h1>
        <div className="flex flex-col gap-5">
          {categories.map((category, index) => (
            <CategoryItem category={category} key={index} />
          ))}
        </div>
      </div>
      <NavBar active={"Serviços"} />
    </>
  );
}
