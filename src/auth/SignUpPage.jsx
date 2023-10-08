import { EditInput } from "./EditInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ButtonsLogin } from "./ButtonsLogin";
import { register as registerService } from "./registerFunction"

import { IoMdLock } from "react-icons/io";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export function SignUpPage() {
  const schema = yup.object({
    email: yup
      .string()
      .email("Digite um email valido")
      .required("É nescessário informar um email"),
    password: yup.string().required("É nescessário informar a senha"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
      .required("Confirme a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const callbackRegister = async () => {
    try {
        const { email, password, password_confirm } = getValues();
        if (password === password_confirm) {
            const user = await registerService({ username: email, email, password });
            if (user.id) {
                navigate("/login");
            }
        }
    } catch (error) {
        if (error.name === "AxiosError") {
            const { data, status } = error.response
            if (status === 409) {
                const field = data.field;
                setError(field, { type: "customn", message: data.message });
            }
        }
    }
};

  return (
    <div className="w-full min-h-screen flex justify-center align-center gap-3 p-5 font-medium">
      <div>
        <h1 className="text-primary text-base align-center mb-6 font-semibold text-center">
          Register
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
          <EditInput
            inputName="Confirmar senha"
            typeInput="password"
            Icon={IoMdLock}
            placeholder="Confirme sua senha..."
            errors={errors}
            register={register}
            name="password_confirm"
            data-cy="login-password_confirm"
          />

          <ButtonsLogin typePage="register" callback={callbackRegister} />
        </form>
      </div>
    </div>
  );
}
