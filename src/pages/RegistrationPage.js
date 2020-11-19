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
        <h1>Sign Up</h1>
        <h2>or login</h2>
        <form>
          <div>
            <input type="text" placeholde="login" />
          </div>
          <div>
            <input type="password" placeholde="password" />
          </div>
        </form>
      </>
    );
  }
}

export default RegistrationPage;
