import { BsFacebook, BsGoogle } from "react-icons/bs";

export function ButtonsLogin({ typePage, callback }) {
  const classButton =
    "bg-primary text-base text-secondary-100 rounded-lg gap-x-3 p-4 font-medium flex justify-center align-center";
  return (
    <>
      <h2 className="text-secondary-500 text-base text-center font-medium">
        {typePage == "login" ? "Entrar com" : "Criar com"}
      </h2>

      <div className="container-lg gap-4">
        <button className={classButton}>
          <BsGoogle />
          <p>Google</p>
        </button>
        <button className={classButton}>
          <BsFacebook />
          <p>Facebook</p>
        </button>
      </div>

      <h2 className="text-secondary-500 text-base text-center font-normal">
        {typePage == "login"
          ? "Ainda não tem uma conta?"
          : "Já possui uma conta?"}
      </h2>

      <a
        className="bg-primary-ligth text-sm text-primary rounded-lg p-4 font-medium flex justify-center align-center"
        href={typePage == "login" ? "signOut" : "signIn"}
      >
        <p>{typePage == "login" ? "Criar conta" : "Fazer login"}</p>
      </a>

      <button className={classButton} data-cy={typePage == "login" ? "data-cy='login-save'" : "data-cy='register-save'"} onClick={callback}>Entrar</button>
    </>
  );
}
