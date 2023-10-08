import { EditInput } from "./EditInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { login } from "./loginFunction";
import { ButtonsLogin } from "./ButtonsLogin";

export function SignInPage() {
  const schema = yup.object({
    email: yup
      .string()
      .email("Digite um email valido")
      .required("É nescessário informar um email"),
    password: yup.string().required("É nescessário informar a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const callbackLogin = async () => {
    try {
      const { email, password } = getValues();
      const response = await login({ email, password });
      console.log(response);
      if (response.access) {
        navigate("/account");
      }
    } catch (error) {
      if (error.name === "AxiosError") {
        const { status } = error.response;
        if (status === 401) {
          setError("email", {
            type: "customn",
            message: "Usuário ou senha incorreto",
          });
          setError("password", {
            type: "customn",
            message: "Usuário ou senha incorreto",
          });
        }
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center align-center gap-3 p-5 font-medium">
      <div>
        <h1 className="text-primary text-base align-center mb-6 font-semibold text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit(callbackLogin)} className="flex flex-col">
          <EditInput
            inputName="E-mail"
            typeInput="email"
            placeholder="Digite aqui seu e-mail..."
            errors={errors}
            register={register}
            data-cy="login-email"
          />
          <EditInput
            inputName="Senha"
            typeInput="password"
            placeholder="Digite sua senha..."
            errors={errors}
            register={register}
            data-cy="login-password"
          />
          <Link
            to="#"
            className="font-medium text-xs self-end mt-2 text-secondary-400 underline"
          >
            Esqueci a senha
          </Link>

          <ButtonsLogin
            typePage="login"
          />
        </form>
      </div>
    </div>
  );
}
