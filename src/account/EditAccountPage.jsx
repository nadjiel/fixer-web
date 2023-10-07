import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

import { EditInput } from "./EditInput";
import { EditButton } from "./EditButton";

export function EditAccountPage() {
  return (
    <div className="gap-8 px-5 py-6">
      <h1 className="text-xl text-primary font-semibold">Editar conta</h1>
      <div className="gap-6">
        <EditInput
          idInput="nameId"
          inputName="Nome:"
          value="José da Silva Sousa Júnior"
          typeInput="text"
        />
        <EditInput
          idInput="emailId"
          inputName="E-mail:"
          value="jose.silva@gmail.com"
          typeInput="text"
        />
        <EditInput
          idInput="phoneId"
          inputName="Telefone:"
          value="(83) 99999-9999"
          typeInput="text"
        />
        <div className="flex-row justify-between">
          <EditButton
            Icon={AiOutlineClose}
            callback={() => console.log("Cancelando")}
            name="Cancelar"
          />
          <EditButton
            Icon={AiOutlineCheck}
            callback={() => console.log("Submetendo")}
            name="Salvar"
          />
        </div>
      </div>
    </div>
  );
}
