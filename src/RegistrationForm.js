import React from "react";
import {PopUpForm} from "./PopUpForm"

export function RegistrationForm({
  handleEmailChange, 
  handlePasswordChanges,
   checkEmailCorrectness, 
   checkPasswordCorrectness,
   password,
   email,
   emailIsCorrect,
   emailIsFocusOut,
   messageIncorrectEmail,
   passwordIsLong,
   passwordFocusOut,
   messageShortPassword

  }) {
    return (
    <div className="form-popup" id="myForm">
      <form className="form-container">
        <h1>Login</h1>
        <label htmlFor="email">
          <b>Email:</b>
        </label>
        {!emailIsCorrect && emailIsFocusOut && (
          <PopUpForm message={messageIncorrectEmail} />
        )}
        <br/>
        <input
          className = "emailForm"
          type="text"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
          onBlur={checkEmailCorrectness}
        />
        <label htmlFor="psw">
        <br/>
          <b>Password:</b>
        </label>
        {!passwordIsLong && passwordFocusOut && (
          <PopUpForm message={messageShortPassword} />
        )}
        <br/>
        <input
        className = "passwordForm"
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={(e) => handlePasswordChanges(e)}
          onBlur={checkPasswordCorrectness}
        />
        <br/>
        <button type="submit" className="btnlogin">
          Login
        </button>
      </form>
    </div>
  );
}