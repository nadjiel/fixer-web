import {
  AiOutlineClose,
  AiOutlineCheck,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import { EditInput } from "./EditInput";
import { EditButton } from "./EditButton";
import { NavBar } from "../navBar/NavBar";

export function EditAccountPage() {
  return (
    <>
      <div className=" gap-8 px-5 py-6">
        <h1 className="text-xl text-primary font-semibold">Editar conta</h1>
        <div className="gap-6">
          <EditInput
            idInput="nameId"
            inputName="Nome:"
            value="Ulisses Albquerque"
            typeInput="text"
            Icon={AiOutlineUser}
          />
          <EditInput
            idInput="emailId"
            inputName="E-mail:"
            value="ulisses@email.com"
            typeInput="text"
            Icon={AiOutlineMail}
          />
          <EditInput
            idInput="phoneId"
            inputName="Telefone:"
            value="(83) 99999-9999"
            typeInput="text"
            Icon={AiOutlinePhone}
          />
          <div className="flex flex-row gap-3 mt-">
            <EditButton
              Icon={AiOutlineClose}
              callback={() => console.log("Cancelando")}
              name="Cancelar"
              color="bg-secondary-400"
            />
            <EditButton
              Icon={AiOutlineCheck}
              callback={() => console.log("Submetendo")}
              name="Salvar"
              color="bg-primary"
            />
          </div>
        </div>
      </div>
      <NavBar active={"Conta"} />
    </>
  );
}
