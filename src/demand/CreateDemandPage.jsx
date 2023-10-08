import {
  AiOutlineClose,
  AiOutlineCheck,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFileImage,
} from "react-icons/ai";
import { NavBar } from "../navBar/NavBar";
import { CreateDemandInput } from "./CreateDemandInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../api";

export function CreateDemandPage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    api.post("/demands/", { text });
    navigate("/demands");
  }

  return (
    <>
      <div className="container-sm h-max flex flex-col items-cente px-5 py-6 space-y-3 pb-14">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col justify-between"
        >
          <div>
            <h4 className="text-xl text-primary font-semibold">Nova demanda</h4>
            <textarea
              value={text}
              placeholder="Escreva sua demanda"
              onChange={(e) => setText(e.target.value)}
              className="p-2 text-base font-normal h-32 border-2 border-secondary-400 rounded-xl my-3"
            ></textarea>
            <CreateDemandInput
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
            />
          </div>
          <div className="flex flex-row gap-3 text-center mt-20">
            <Link to="./.." className="button-demand bg-secondary-400">
              <AiOutlineClose /> Cancelar
            </Link>
            <button className="button-demand bg-primary">
              <AiOutlineCheck /> Salvar
            </button>
          </div>
        </form>
      </div>
      <NavBar active={"Demandas"} />
    </>
  );
}
