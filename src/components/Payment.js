import React, { useState } from "react";
import "./PaymentStyles.css";
import { v4 } from "uuid";

const Payment = (props) => {
  if (!props.location.state) {
    props.history.push("/");
  }
  const uuid = "910c7fb2-c62d-4050";
  const [currentComponent, changeCurrentComponent] = useState(0);
  const [formInputs, setFormInputs] = useState({
    NameOnCard: "",
    CreditCardNumber: "",
    ExpiryDate: "",
    SecurityCode: "",
  });
  const [OTP, setOTP] = useState("");
  const { amount } = props.location.state;
  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    for (var temp of Object.values(formInputs)) {
      if (temp === "") {
        validForm = false;
      }
    }
    if (validForm) {
      changeCurrentComponent(1);
    } else {
      alert("Please check all the input fields");
    }
  };
  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };
  const handleOTP = (e) => {
    e.preventDefault();
    if (OTP === "123456") {
      changeCurrentComponent(2);
    } else {
      changeCurrentComponent(3);
    }
  };
  const handleFormInputChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.id]: e.target.value,
    });
  };
  const allComponents = [
    <div id="Checkout" className="inline">
      <h1>Pay Invoice</h1>
      <div className="card-row">
        <span className="visa"></span>
        <span className="mastercard"></span>
        <span className="amex"></span>
        <span className="discover"></span>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="PaymentAmount">Payment amount</label>
          <div className="amount-placeholder">
            <span>$</span>
            <span>{amount}</span>
          </div>
        </div>
        <div className="form-group">
          <label or="NameOnCard">Name on card</label>
          <input
            required
            id="NameOnCard"
            onChange={handleFormInputChange}
            className="form-control"
            type="text"
            maxLength="255"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="CreditCardNumber">Card number</label>
          <input
            required
            onChange={handleFormInputChange}
            id="CreditCardNumber"
            type="number"
            className="null card-image form-control"
            type="text"
          ></input>
        </div>
        <div className="expiry-date-group form-group">
          <label htmlFor="ExpiryDate">Expiry date</label>
          <input
            required
            onChange={handleFormInputChange}
            id="ExpiryDate"
            className="form-control"
            type="number"
            placeholder="MM / YY"
            maxLength="4"
            minLength="4"
          ></input>
        </div>
        <div className="security-code-group form-group">
          <label htmlFor="SecurityCode">Security code</label>
          <div className="input-container">
            <input
              required
              onChange={handleFormInputChange}
              id="SecurityCode"
              className="form-control"
              type="text"
            ></input>
            <i id="cvc" className="fa fa-question-circle"></i>
          </div>
        </div>

        <button
          id="PayButton"
          className="btn btn-block btn-success submit-button"
          type="submit"
          onClick={handleSubmit}
        >
          <span className="submit-button-lock"></span>
          <span className="align-middle">Pay ${amount}</span>
        </button>
      </form>
    </div>,
    <div id="Checkout" className="inline">
      <h1>Please enter the OTP </h1>
      <div className="card-row">
        <span className="visa"></span>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="PaymentAmount">Transaction ID</label>
          <div className="amount-placeholder">
            <span>$</span>
            <span>{uuid}</span>
          </div>
        </div>
        <div className="form-group">
          <label or="otp">6 Digit OTP</label>
          <input
            required
            id="otp"
            key="otp"
            onChange={handleOTPChange}
            className="form-control"
            type="text"
            maxLength="255"
          ></input>
        </div>

        <button
          id="PayButton"
          className="btn btn-block btn-success submit-button"
          type="submit"
          onClick={handleOTP}
        >
          <span className="submit-button-lock"></span>
          <span className="align-middle">Submit</span>
        </button>
      </form>
    </div>,
    <div id="Checkout" className="inline">
      <h1 className="text-success">Payment Successful! </h1>

      <form>
        <div className="form-group">
          <label htmlFor="PaymentAmount">Transaction ID</label>
          <div className="amount-placeholder">
            <span>$</span>
            <span>{uuid}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="PaymentAmount">Your order will reach you in</label>
          <div className="amount-placeholder">
            <span>30 minutes</span>
          </div>
        </div>
      </form>
    </div>,
    <div id="Checkout" className="inline">
      <h1 className="text-danger">Payment Failed! </h1>

      <form>
        <div className="form-group ">
          <label htmlFor="PaymentAmount ">Transaction ID</label>
          <div className="amount-placeholder">
            <span>$</span>
            <span>{uuid}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="PaymentAmount">Error:</label>
          <div className="amount-placeholder">
            <span>Wrong OTP</span>
          </div>
        </div>
      </form>
    </div>,
  ];
  return (
    amount && (
      <div className="container mb-5">{allComponents[currentComponent]}</div>
    )
  );
};

export default Payment;
