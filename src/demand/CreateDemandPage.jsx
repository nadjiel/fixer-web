import {
  AiOutlineClose,
  AiOutlineCheck,
  // AiOutlineMail,
  // AiOutlinePhone,
  // AiOutlineFileImage,
} from "react-icons/ai";
import { NavBar } from "../navBar/NavBar";
// import { CreateDemandInput } from "./CreateDemandInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../api";

export function CreateDemandPage() {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await api.post("/demands/", { text });
    // alert(`Seu Código: ${res.data.code}`)
    navigate("/demands/" + res.data.id);
  }

  return (
    <>
      <div className="container-sm h-max flex flex-col items-cente px-5 py-6 space-y-3 pb-14">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col justify-between"
        >
          <div>
            <h4 className="text-xl text-primary font-semibold">
              Editar demanda
            </h4>
            <textarea
              value={text}
              placeholder="Escreva sua demanda"
              onChange={(e) => setText(e.target.value)}
              className="p-2 text-base font-normal h-32 border-2 border-secondary-400 rounded-lg my-3 bg-secondary-200"
            ></textarea>
            {/* <CreateDemandInput
              labelValue={"Adicionar imagem:"}
              typeInput={"file"}
              inputId={"file"}
              placeholderValue={"jose.silva@gmail.com"}
              Icon={AiOutlineFileImage}
            />
            <CreateDemandInput
              labelValue={"Email:"}
              typeInput={"email"}
              inputId={"email"}
              placeholderValue={"jose.silva@gmail.com"}
              Icon={AiOutlineMail}
            />
            <CreateDemandInput
              labelValue={"Telefone:"}
              typeInput={"tel"}
              inputId={"telephone"}
              placeholderValue={"(83) 99999-9999"}
              Icon={AiOutlinePhone}
            /> */}
          </div>
          <div className="flex flex-row gap-3 text-center mt-20">
            <Link to="./.." className="big-button bg-secondary-500 ">
              <AiOutlineClose /> Cancelar
            </Link>
            <button className="big-button bg-primary ">
              <AiOutlineCheck /> Salvar
            </button>
          </div>
        </form>
      </div>
      <NavBar active={"Demandas"} />
    </>
  );
}
