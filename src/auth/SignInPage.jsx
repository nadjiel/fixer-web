import { EditInput } from "./EditInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonsLogin } from "./ButtonsLogin";
import { IoMdLock } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { useAuth } from "./contexts";
import { useEffect } from "react";

export function SignInPage() {
  const navigate = useNavigate();
  const { user, signin } = useAuth();

  const schema = yup.object({
    email: yup
      .string()
      .email("Digite um email valido")
      .required("É necessário informar seu email"),
    password: yup.string().required("É necessário informar sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignin = () => {
    const { email, password } = getValues();
    signin({ username: email, password });
  };

  useEffect(() => {
    if(!user) return;

    navigate("/account");
  }, [user]);

  return (
    <div className="w-full min-h-screen flex justify-center align-center gap-3 p-5 font-medium">
      <div>
        <h1 className="text-primary text-base align-center mb-6 font-semibold text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col">
          <EditInput
            inputName="E-mail"
            typeInput="email"
            Icon={AiOutlineMail}
            placeholder="Digite aqui seu e-mail..."
            errors={errors}
            name="email"
            register={register}
            data-cy="login-email"
          />
          <EditInput
            inputName="Senha"
            typeInput="password"
            Icon={IoMdLock}
            placeholder="Digite sua senha..."
            errors={errors}
            register={register}
            name="password"
            data-cy="login-password"
          />
          {/* <Link
            to="#"
            className="font-medium text-xs self-end mt-2 text-secondary-400 underline"
          >
            Esqueci a senha
          </Link> */}

          <ButtonsLogin typePage="login" />
        </form>
      </div>
    </div>
  );
}
