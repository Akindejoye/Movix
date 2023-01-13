import { useState } from "react";
import CustomInput from "../../components/customInput/CustomInput";
import Dice from "../../assets/images/dice.svg";
import Eye from "../../assets/images/eye.svg";
import "./style.css";

const Register = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const handletogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  return (
    <div className="register">
      <div className="register_box">
        <img src={Dice} alt="Logo" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-in to your account and start your experience</span>
        <form className="regForm">
          <div>
            <CustomInput
              type="text"
              placeholder="Full Name"
              name="accountNumber"
            />
            <CustomInput type="text" placeholder="Email" name="email" />
            <CustomInput
              type={togglePassword ? "text" : "password"}
              placeholder="Password"
              name="password"
            />

            <img
              src={Eye}
              alt="Toggle Passoword"
              onClick={handletogglePassword}
            />
          </div>
          <button className="btn">Register</button>
        </form>
        <div className="account">
          <p>Already have an account?</p>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
