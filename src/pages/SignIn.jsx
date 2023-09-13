import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { signIn } from "../store/actions.js/userActions.js";

const SignIn = () => {
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [email, password];
    if (aux.some((campo) => !campo.current.value)) {
      alert("Todos los campos son obligatorios");
    } else {
      const body = {
        email: email.current.value,
        password: password.current.value,
      };
      dispatch(signIn(body)).then((response) => {
        if (response.payload.success) {
          alert("Bienvenido " + response.payload.user.name);
          Navigate("/");
        }
      });
    }
  };

  const signInWithGoogle = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    const body = {
      email: userData.email,
      password: userData.given_name + userData.sub,
    };
    dispatch(signIn(body)).then((respuestaDelAction) => {
      console.log(respuestaDelAction);
      if (respuestaDelAction.payload.success) {
        alert("Bienvenido " + respuestaDelAction.payload.user.name);
        Navigate("/");
      }
    });
  };

  return (
    <div className="">
      <div className="signin d-flex col-10 justify-center items-center">
        <form
          className="d-flex flex-column justify-center items-start gap-5 bg-gray-200 p-5"
          onSubmit={handleSubmit}
        >
          <label>
            {" "}
            email
            <input type="email" name="email" ref={email} />
          </label>
          <label>
            {" "}
            password
            <input type="password" name="password" ref={password} />
          </label>

          <button className="btn btn-secondary"> Sign in </button>
          <GoogleLogin
            text="signin_with"
            onSuccess={signInWithGoogle}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;