import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <h2>Login</h2>
      <h3>
        or <Link to="/register">register</Link>
      </h3>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="login">Login</label>
          <input
            name="login"
            ref={register}
            type="text"
            required
            placeholde="login"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" ref={register} type="password" required />
        </div>
        <div>
          <input
            data-testid="login-page-submit"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
