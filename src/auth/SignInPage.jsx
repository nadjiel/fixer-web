import { GoogleLogin } from "@react-oauth/google";

export function SignInPage() {
  return (
    <div className="p-2">
      <h2 className="text-lg">Entrar</h2>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
