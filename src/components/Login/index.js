import "./login.css";
import logo from "../img/image1.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="container-section">
        <div className="container-login-login p-2 ">
          <div className="container-logo">
            <img src={logo} />
          </div>
          <form className="flex justify-center items-center flex-col">
            <label className="text-xl mb-2 container-formlabel-login"></label>
            <input
              placeholder="E-mail:"
              className="container-input-login"
              type="text"
              id=""
            />
            <label className="text-xl mb-2 container-formlabel-login"></label>
            <input
              type="text"
              placeholder="Password:"
              className="container-input-login"
              id=""
            />
            <input
              type="text"
              placeholder="Categoria:"
              className="container-input-login"
              id=""
            />
            <Link to="/logado">
              {" "}
              {/* Use o componente Link para criar o link */}
              <button
                type="submit"
                className="border-black border-opacity-50 text-lg container-button-login"
              >
                Entrar
              </button>
            </Link>
            <p className="text-center text-2xl">Esqueceu a senha ?</p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
