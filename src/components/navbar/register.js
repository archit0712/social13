import React, { Component, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Label, Loader, Checkbox } from "semantic-ui-react";
import styled from "styled-components";
import NavBar from "./navBar";
import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import {
  doc,
  updateDoc,
  setDoc,
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";

const Container = styled.div`
  max-width: 600px;
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
  margin-top: 5%;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 15px;
  text-align: center;
`;

const Wrapper = styled.div`
  border: 1px solid #dbdbdb;
  padding: 15px;
  border-radius: 4px;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #330033;
    color: white;
    box-shadow: 0px 3px 5px grey;
    :hover {
      background-color: #500150;
      color: white;
    }
  }
`;

const Error = styled.span`
  color: red;
`;
// const [data, setData] = useState({
//   email: "",
//   password: "",
//   cpassword: "",
//   name: "",
//   username: "",
//   phone: "",
// });
function Register() {
  const state = {
    user_id: localStorage.getItem("user_id"),
    isAuth: localStorage.getItem("isAuth"),
    isAdmin: localStorage.getItem("isAdmin"),
    isLoading: false,
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    check: false,
    formErrors: {
      fnameError: "",
      lnameError: "",
      emailError: "",
      passwordError: "",
      invalidError: "",
      checkError: "",
    },
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // const err = this.validate();
    // if (!err && this.state.check === true) {
    //   this.setState({ isLoading: true });
    //   axios
    //     .post("/api/user/register", {
    //       email: this.state.email,
    //       firstname: this.state.firstname,
    //       lastname: this.state.lastname,
    //       password: this.state.password,
    //     })
    //     .then((res) => {
    //       localStorage.setItem("user_id", res.data.user_id);
    //       localStorage.setItem("isAuth", "true");
    //       localStorage.setItem("isAdmin", "false");
    //       this.props.history.push("/");
    //     })
    //     .catch((err) => {
    //       if (err.response.data === "email already used") {
    //         this.setState({ isLoading: false });
    //         this.setState(
    //           Object.assign(this.state.formErrors, {
    //             invalidError: "Email already used",
    //           })
    //         );
    //       }

    //       if (err.response.data === "invalid email") {
    //         this.setState({ isLoading: false });
    //         this.setState(
    //           Object.assign(this.state.formErrors, {
    //             invalidError: "Invalid email",
    //           })
    //         );
    //       }
    //       console.log(err.response.data);
    //     });
    // } else {
    //   console.log("Submission Error");
    // }
  };

  return (
    <>
      <NavBar />
      <Container>
        <Form onSubmit={handleRegister}>
          <Title>Create an account</Title>
          <Wrapper>
            <Form.Field>
              <label>E-mail</label>

              <Form.Input
                maxLength="30"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={handleRegister}
              />
            </Form.Field>
            <Form.Field>
              <label>First Name</label>
              <Form.Input
                maxLength="30"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                onChange={handleRegister}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <Form.Input
                maxLength="30"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                onChange={handleRegister}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Form.Input
                maxLength="30"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={handleRegister}
              />
              <Checkbox
                label="I agree to the TERMS AND CONDITIONS"
                onChange={handleRegister}
              />
            </Form.Field>
          </Wrapper>
        </Form>
      </Container>
    </>
  );
}

export default Register;
