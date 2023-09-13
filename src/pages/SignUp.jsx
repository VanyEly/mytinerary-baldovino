import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { signUp } from "../store/actions.js/userActions";
const SignUp = () => {
  const [countries, setCountries] = useState([]);

  const dispatch = useDispatch();

  const name = useRef(null);
  const lastname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const photo = useRef(null);
  const country = useRef(null);

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [name,lastname ,email, password, photo, country];
    console.log(aux);
    if (aux.some((campo) => !campo.current.value)) {
      console.log("entre aca");
      alert("Todos los campos son obligatorios");
    } else {
      const body = {
        name: name.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        photo: photo.current.value,
        password: password.current.value,
        country: country.current.value,
      };

      // const prueba ={
      //   "name":"elizabeth",
      //   "lastname": "Gomez",
      //    "email" : "vani_94_00@gmail.com",
      //    "password": "123456",
      //    "country": "Portugal"
      // }
      dispatch(signUp(body));
    
     }
  };

  const signUpWithGoogle = (credentialResponse) => {
    const dataUser = jwtDecode(credentialResponse.credential);
    console.log(dataUser);
    console.log(dataUser.picture);
    const body = {
      name: dataUser.name,
      lastname: dataUser.lastname,
      email: dataUser.email,
      photo: dataUser.picture,
      password: dataUser.given_name + dataUser.sub,
    };
    dispatch(signUp(body));
  };

  return (
    <div id="formulario" className="container col-10 col-md-6 col-xl-5 bg-secondary">
      <form
        className="signup form d-flex flex-column justify-center items-start gap-5  p-5"
        onSubmit={handleSubmit}
      >
        <label className="">
    
          Name
          <input
            className="form-text"
            type="text"
            name="name"
            ref={name}
            required
          />
          </label>
          <label className="">
    
          Lastname
          <input
            className="form-text"
            type="text"
            name="lastname"
            ref={lastname}
            required
          />
          </label>
        <label>
    
          email
          <input type="email" name="email" ref={email} />
        </label>
        <label>
    
          password
          <input type="password" name="password" ref={password} />
        </label>
        <label>
    
          photo
          <input type="text" name="photo" ref={photo} />
        </label>
        <label>
    
          country
          <select name="country" ref={country}>
            {countries.length > 0 &&
              countries.map((country) => (
                <option key={`opt-country-${country}`} value={country}>
            
                  {country}
                </option>
              ))}
          </select>
        </label>
        <button id="google" className="btn btn-secondary m-1rounded col-12 h-auto"> Registrarse </button>
        <GoogleLogin
          text="signup_with"
          onSuccess={signUpWithGoogle}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </form>
    </div>
  );
};

export default SignUp;