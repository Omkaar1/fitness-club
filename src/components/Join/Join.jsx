import React, { useRef } from "react";
import "./join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z0zh2of",
        "template_76czxsf",
        form.current,
        "XTPYJ2KuMOg9WqwrZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div className="span">
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div className="span">
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email Address here"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
