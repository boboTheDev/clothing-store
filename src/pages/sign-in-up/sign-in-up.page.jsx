import React from "react";
import "./sign-in-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.components";
import SignUp from "../../components/sign-up/sign-up.components";
const SignInUp = () => (
  <div className="sign-in-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;
