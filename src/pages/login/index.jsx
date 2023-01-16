import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import CustomInput from "../../components/customInput/CustomInput";
import Dice from "../../assets/images/dice.svg";
import Eye from "../../assets/images/eye.svg";
import "./style.css";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handletogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login_box">
        <img src={Dice} alt="Logo" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-up to start your experience</span>
        <form className="loginForm">
          <div>
            <div>
              <CustomInput
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div login__password-box>
              <CustomInput
                type={togglePassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={Eye}
                alt="Toggle Passoword"
                className="eye-icon"
                onClick={handletogglePassword}
              />
            </div>
          </div>

          <button className="btn" onClick={login}>
            Login
          </button>
        </form>
        <div className="account">
          <p>Don't have an account?</p>
          <button>
            <Link to="/" className="link">
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
