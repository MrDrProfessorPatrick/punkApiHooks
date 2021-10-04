import React from "react";
import { useState, useEffect } from "react";
import { RegistrationForm } from "./RegistrationForm";

export function RegistrationFormLogic() {
  const [isOpened, setIsOpened] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [emailIsCorrect, setEmailCorrect] = useState(true);
  let [emailIsFocusOut, setEmailFocusChecker] = useState(false);
  let [passwordIsLong, setPasswordCheck] = useState(false)
  let [passwordFocusOut, setPasswordFocusOut] = useState(false)
  
  const messageIncorrectEmail = "Incorrect Email";
  const messageShortPassword = "Password must be longer then 6 symbols";

  function openCloseForm() {
    setIsOpened(!isOpened);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChanges(e) {
    setPassword(e.target.value);
  }

  function checkEmailCorrectness() {
    if (email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g) === null) {
     setEmailCorrect(false)
     setEmailFocusChecker(true)
      console.log('EMAIL IS INCORRECT')
    } else {
      setEmailCorrect(false);
      setEmailFocusChecker(true);
    }
    console.log("email corectness function");
  }

  function checkPasswordCorrectness() {
    console.log("Password Length", password.length);
    if (password.length < 6) {
      setPasswordCheck(false);
      setPasswordFocusOut(true);
    } else {
      setPasswordCheck(true);
      setPasswordFocusOut(true);
    }
  }
console.log('email is Correnct',emailIsCorrect, emailIsFocusOut )

  return (
    <React.Fragment>
      <button className="open-button" onClick={openCloseForm}>
        {!isOpened ? "Open Form" : "Close Form"}
      </button>
      {isOpened && (
        <RegistrationForm
          email={email}
          password={password}
          passwordIsLong = {passwordIsLong}
          emailIsCorrect = {emailIsCorrect}
          emailIsFocusOut = {emailIsFocusOut}
          passwordFocusOut = {passwordFocusOut}
          handleEmailChange={handleEmailChange}
          handlePasswordChanges={handlePasswordChanges}
          checkEmailCorrectness = {checkEmailCorrectness}
          checkPasswordCorrectness = {checkPasswordCorrectness}
          messageIncorrectEmail = {messageIncorrectEmail}
          messageShortPassword = {messageShortPassword}

        />
      )}
    </React.Fragment>
  );
}
