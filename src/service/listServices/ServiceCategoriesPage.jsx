import { CategoryItem } from "./CategoryItem";
import { NavBar } from "../../navBar/NavBar";

export function ServiceCategoriesPage() {
  const categories = ["Saúde", "Desenvolvimento", "Educação"];
  return (
    <>
      <div className="gap-3 px-5 py-4">
        <h1 className="text-xl text-primary">Serviços ofertados</h1>
        <div className="flex flex-col gap-5">
          {categories.map((item, index) => (
            <CategoryItem key={index} data={item} />
          ))}
        </div>
      </div>
      <NavBar active={"Serviços"} />
    </>
  );
}
