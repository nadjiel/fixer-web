import { BsFacebook, BsGoogle } from "react-icons/bs";

export function SignInPage() {
  const classButton =
    "text-base text-[#B3261E] bg-[#D8E0F3] radius-lg gap-x-3 p-4 flex justify-center align-center";
  return (
    <div className="flex justify-center align-center gap-3">
      <h1 className="text-black text-base text-center">Entrar com</h1>
      <div className="gap-3">
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
