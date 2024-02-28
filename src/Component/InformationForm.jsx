import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InformationForm.css";
const InformationForm = () => {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [feedback, setfeedback] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/", {
        method: "post",
        body: JSON.stringify({ fullName, email, feedback, phoneNumber }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      setfullName("");
      setemail("");
      setfeedback("");
      setphoneNumber("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-group">
      <h4>Feedback Form</h4>
      <form onSubmit={collectData} method="post" className="mt-3">
        <div className="mb-3">
          <label htmlFor="fullName">
            Full Name:
            <input
              className="form-control"
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="email">
            Email:
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="feedback">
            Your Feedback:
            <input
              className="form-control"
              type="text"
              name="feedback"
              value={feedback}
              onChange={(e) => setfeedback(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="phoneNumber">
            Phone Number:
            <input
              className="form-control"
              type="numeric"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InformationForm;
