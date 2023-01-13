import { useState } from "react";
import CustomInput from "../../components/customInput/CustomInput";
import Dice from "../../assets/images/dice.svg";
import Eye from "../../assets/images/eye.svg";
import "./style.css";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const handletogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  return (
    <div className="login">
      <div className="login_box">
        <img src={Dice} alt="Logo" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-in to your account and start your experience</span>
        <form className="loginForm">
          <div>
            <div>
              <CustomInput type="text" placeholder="Email" name="email" />
            </div>
            <div login__password-box>
              <CustomInput
                type={togglePassword ? "text" : "password"}
                placeholder="Password"
                name="password"
              />
              <img
                src={Eye}
                alt="Toggle Passoword"
                className="eye-icon"
                onClick={handletogglePassword}
              />
            </div>
          </div>

          <button className="btn">Login</button>
        </form>
        <div className="account">
          <p>Don't have an account?</p>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
