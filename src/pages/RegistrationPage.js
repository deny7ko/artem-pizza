import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
      <h2>Register</h2>
      <h3>or <Link to="/login">login</Link></h3>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="login">Login</label>
          <input name="login" ref={register} type="text" placeholde="login" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" ref={register} type="password" required />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirmation</label>
          <input name="password_confirmation" ref={register} type="password" required />
        </div>
        <div>
          <input data-testid="registration-page-submit" type="submit" value="Submit"></input>
        </div>
      </form>
    </>
  );
}

export default RegistrationPage;
