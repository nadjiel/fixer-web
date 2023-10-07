import { NavBar } from "../navBar/NavBar";
import { CreateDemandInput } from "./CreateDemandInput";

export function CreateDemandPage() {
  return (
    <>
      <div className="container flex flex-col px-5 py-6">
        <h4 className="text-xl ">Nova demanda</h4>
        <textarea></textarea>
        <CreateDemandInput
          labelValue={"Adicionar imagem"}
          typeInput={"file"}
          inputId={"file"}
          placeholderValue={"jose.silva@gmail.com"}
        />
        <CreateDemandInput
          labelValue={"Email"}
          typeInput={"email"}
          inputId={"email"}
          placeholderValue={"jose.silva@gmail.com"}
        />
        <CreateDemandInput
          labelValue={"Telefone:"}
          typeInput={"tel"}
          inputId={"telephone"}
          placeholderValue={"(83) 99999-9999"}
        />
      </div>
      <NavBar active={"Demandas"} />
    </>
  );
}
