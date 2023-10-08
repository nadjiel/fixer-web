import { BsFacebook, BsGoogle } from "react-icons/bs";

export function SignInPage() {
  const classButton =
    "bg-primary text-base text-secondary-100 rounded-lg gap-x-3 p-4 font-medium flex justify-center align-center";
  return (
    <div className="w-full min-h-screen flex justify-center align-center gap-3 p-5 font-medium">
      <h1 className="text-black text-base text-center">Entrar com</h1>
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
    </div>
  );
}
