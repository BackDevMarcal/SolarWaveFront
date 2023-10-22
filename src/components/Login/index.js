import { instance } from "../../service/api";
import { useState } from "react";
import "./login.css";

async function login(username, password) {
  try {
    const response = await instance.post("/login", {
      email: username,
      password: password,
    });
    console.log(response.data); // Access the response data
  } catch (err) {
    console.error(err); // Handle errors
  }
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <header className=" m-0 w-full container-header"></header>
      <section className="container-section">
        <div className="container-login-login p-8 ">
          <div>
            <img src=""></img>
          </div>
          <form className="flex justify-center items-center flex-col">
            <div className="dados">
              <label className="text-xl mb-2 container-formlabel-login">
                USUARIO :
              </label>
              <div className="">
                <input
                  placeholder="inseria seu usuario"
                  className="bg-white text-black outline-0 container-input-login"
                  type="text"
                  id=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <label className="text-xl mb-2 container-formlabel-login">
                SENHA :
              </label>
              <div className="">
                <input
                  placeholder="inseri sua senha"
                  className=" bg-white text-black outline-0 container-input-login"
                  type="text"
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="border-black border-opacity-50 text-lg container-button-login"
              onClick={login(username, password)}
            >
              Entrar
            </button>
            <p className="text-center text-2xl">
              Não tem cadastro ?
              <a className="text-black">
                <strong> Cadastrar-se </strong>
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
