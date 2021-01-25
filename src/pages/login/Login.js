import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { adminPassword } from "../../components/utils/Validation";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(this.state);

    if (email === "" && password === "")
      alert("email and passeord can not be null");
    else {
      if (
        email === adminPassword.email &&
        password === adminPassword.password
      ) {
        //alert("correct");
        this.setState({ redirect: true });
      } else {
        alert("Email and Passeord is not correct");
      }
    }
  };

  render() {
    if (this.state.redirect) return <Redirect to="/dashboard" />;
    return (
      <>
        <StyledLogin className="my-5">
          <h1 className="text-center"> Login</h1>
          <h6 className="text-center text-danger">Email Id: raj@gmail.com</h6>
          <h6 className="text-center text-danger">password: 123</h6>
        </StyledLogin>
        <StyledLogin className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form action="/action_page.php">
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={this.state.handleEmail}
                    onChange={(e) => this.handleEmail(e)}
                  />
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    value={this.state.handlePassword}
                    onChange={(e) => this.handlePassword(e)}
                  />
                </div>
                <button
                  type="submit"
                  class="btn-get-started"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </StyledLogin>
      </>
    );
  }
}

// Styled Components

const StyledLogin = styled.div`
  .btn-get-started {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 50px;
    transition: 0.5s;
    color: #3498db;
    border: 2px solid #3498db;
    text-decoration: none;
  }
  .btn-get-started:hover {
    background: #3498db;
    color: #fff;
  }
`;

export default Login;
