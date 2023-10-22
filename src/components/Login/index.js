import { instance } from "../../service/api";
import { useState } from "react";
import "./login.css";
import logo from "../img/image1.png"


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
      <section className="container-section">
        <div className="container-login-login p-2 ">
          <div className="container-logo">
            <img src={logo}/>
          </div>
          <form className="flex justify-center items-center flex-col">
              <label className="text-xl mb-2 container-formlabel-login"></label>
                <input
                  placeholder="E-mail:"
                  className="container-input-login"
                  type="text"
                  id=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              <label className="text-xl mb-2 container-formlabel-login"></label>
                <input
                  type="text"
                  placeholder="Password:"
                  className="container-input-login"
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Categoria:"
                  className="container-input-login"
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            
            <button
              type="submit"
              className="border-black border-opacity-50 text-lg container-button-login"
              onClick={login(username, password)}
            >
              Entrar
            </button>
            <p className="text-center text-2xl">
              Esqueceu a senha ?
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
