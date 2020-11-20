import React from "react";

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  render() {
    return (
      <>
        <h1>Register</h1>
        <h2>or login</h2>
        <form>
          <div>
            <label for="login">Login</label>
            <input type="text" placeholde="login" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" />
          </div>
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </>
    );
  }
}

export default RegistrationPage;
