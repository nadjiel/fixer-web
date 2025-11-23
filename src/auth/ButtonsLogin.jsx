import { Link } from "react-router-dom";

export function ButtonsLogin({ typePage, callback }) {
  const classButtonWork =
    "bg-primary text-base text-secondary-100 rounded-lg gap-x-3 p-4 font-medium flex justify-center align-center";
  const classButtonNetwork =
    "flex justify-center align-center border-secondary-400 border border-solid text-secondary-400 p-4 gap-3 rounded-lg w-1/2";
  return (
    <>
      <h2 className="text-secondary-500 text-base text-center font-normal">
        {typePage == "login"
          ? "Ainda não tem uma conta?"
          : "Já possui uma conta?"}
      </h2>

      <Link
        className="bg-primary-ligth text-sm text-primary rounded-lg p-4 font-medium flex justify-center align-center mt-2 mb-3"
        href={typePage == "login" ?  "/signIn" : "/signUp"}
      >
        <p>{typePage != "login" ? "Fazer login" : "Criar conta"}</p>
      </Link>

      <button
        className={classButtonWork}
        data-cy={
          typePage == "login"
            ? "data-cy='login-save'"
            : "data-cy='register-save'"
        }
        onClick={callback}
      >
        {typePage == "login" ? "Entrar" : "Criar"}
      </button>
    </>
  );
}
