import { useState } from "react";
import { EditInput } from "./EditInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonsLogin } from "./ButtonsLogin";
import { signup } from "./lib";

import { IoMdLock } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um email valido")
    .required("É necessário informar seu email"),
  password: yup.string().required("É necessário informar sua senha"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("Confirme sua senha"),
});

export function SignUpPage() {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const callbackRegister = async () => {
    try {
      const { email, password } = getValues();
      
      await signup({ username: email, email, password });
      
      navigate("/signin");
    } catch (error) {
      console.error(error)

      setError("Ocorreu um erro inesperado!");
    }
};

  return (
    <div className="w-full min-h-screen flex justify-center align-center gap-3 p-5 font-medium">
      <div>
        <h1 className="text-primary text-base align-center mb-6 font-semibold text-center">
          Cadastro
        </h1>
        <form onSubmit={handleSubmit(callbackRegister)} className="flex flex-col">
          <EditInput
            inputName="E-mail"
            typeInput="email"
            Icon={AiOutlineMail}
            placeholder="Digite aqui seu e-mail..."
            errors={errors}
            name="email"
            register={register}
          />
          <EditInput
            inputName="Senha"
            typeInput="password"
            Icon={IoMdLock}
            placeholder="Digite sua senha..."
            errors={errors}
            register={register}
            name="password"
          />
          <EditInput
            inputName="Confirmar senha"
            typeInput="password"
            Icon={IoMdLock}
            placeholder="Confirme sua senha..."
            errors={errors}
            register={register}
            name="password_confirm"
          />

          <p className="text-primary text-center my-2 text-sm">{error}</p>

          <ButtonsLogin typePage="register"/*  callback={callbackRegister} */ />
        </form>
      </div>
    </div>
  );
}
