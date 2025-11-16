import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logo from "../assets/donefylogo01.svg";
import googleIcon from "../assets/google-icon.svg";
import { auth } from "../../firebaseConfig";

function Login() {
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuario Logado", result.user);
    } catch (error) {
      console.log("Erro ao logar", error);
      alert("Erro ao logar, tente novamente.");
    }
  };

  return (
    <div
      className="min-h-screen h-screen items-center bg-slate-700 flex justify-center
       p-6"
    >
      <div className=" w-[400px] flex  flex-col gap-5 wrap-normal ">
        <img className="w-60 mx-auto" src={logo} alt="Logo" />
        <div className="space-y-4 p-4 bg-slate-400 rounded-md shadow-2xl">
          <h1
            className="text-center text-2xl text-white
         font-bold"
          >
            Seja Bem Vindo! <br />
            <span className=" text-xl">Faça seu Login</span>
          </h1>
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={loginGoogle}
              className="flex gap-2 items-center bg-white border border-none px-4 py-2 rounded-md shadow-sm hover:shadow-md cursor-pointer"
            >
              <img src={googleIcon} alt="Google" width={30} height={30} />
              <p className=" font-sans text-slate-700 font-semibold">
                Entrar com o Google
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
