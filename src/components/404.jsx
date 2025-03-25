import React, { useEffect } from "react";
import Header from "./Header";
import returnIcon from "../assets/images/icons/return.svg"
import errorImg from "../assets/images/icons/error.svg"
import { useNavigate } from "react-router";
import FlexNav from "./FlexNav";

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Olorunfemi says Error"
  }, [])
  

  const handleNavigate = () => {
    navigate("/")
  }

  return (
    <>
      <Header fore="Error" back="Non-Existent" />
      <img className="error__svg__image" src={errorImg} alt="error"/>
      <div className="error__page">
        <h1>Error  <span className="black">404</span>!</h1>
        <p><em>The page you tried accessing does not exist.</em></p>
        <div className="routing">
          <img src={returnIcon} alt="return" onClick={() => handleNavigate()}/>
          <a href="/"> return home</a>
        </div>
      </div>
      <FlexNav/>
    </>
  );
};

export default ErrorPage;
