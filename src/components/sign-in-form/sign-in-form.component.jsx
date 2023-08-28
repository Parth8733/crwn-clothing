import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "../sign-in-form/sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  passowrd: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, passowrd } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
    // console.log(formField);
  };

  const resetFormField = () => {
    setFormField(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        passowrd
      );
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="passowrd"
          value={passowrd}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
