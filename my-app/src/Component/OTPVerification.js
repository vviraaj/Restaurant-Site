import React, { useState } from "react";
import "../App.css";
import { CButton, CCol, CFormInput, CRow } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { baseURL } from "../baseUrl";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [mobileNumber, SetmobileNumber] = useState({});
  const [message, Setmessage] = useState("");

  let url = window.location.href.split("?")[1];

  const SendOTPVerificationCode = () => {
    let otp =
      mobileNumber.firstNumber +
      mobileNumber.secondNumber +
      mobileNumber.thirdNumber +
      mobileNumber.fourthNumber +
      mobileNumber.fifthNumber +
      mobileNumber.sixthNumber;

    let postdata = {
      dial_code: "+91",
      phone: url,
      otp: 123456,
    };

    baseURL
      .post("/pwa/user/login", postdata)
      .then((response) => {
        if (response.data && response.data.error_message) {
          SetmobileNumber({
            firstNumber: "",
            secondNumber: "",
            thirdNumber: "",
            fourthNumber: "",
            fifthNumber: "",
            sixthNumber: "",
          });
          Setmessage(response.data.error_message);
          setTimeout(() => {
            Setmessage("");
          }, 3000);
        } else {
          let Token = response.data.data.token;
          Setmessage("Registration Completed");
          sessionStorage.setItem("Token", Token);
          setTimeout(() => {
            Setmessage("");
            navigate(`/Restaurant`);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="Main-page">
      <div className="Registration-page">
        {message != "" ? <p className="ToastMessage">{message}</p> : ""}
        <h3>OTP Verification</h3>
        <p>Enter the verification code we just sent to your Mobile number</p>
        <CRow>
          <CCol xs={2}>
            <CFormInput
              style={{ width: "120%" }}
              type="tel"
              value={mobileNumber.firstNumber}
              onChange={(e) => {
                let mobilenumber = e.target.value;
                let mobileinput = mobilenumber.replace(/[^0-9]/g, "");
                let mobilecorrectinput = mobileinput.slice(0, 1);
                SetmobileNumber({
                  ...mobileNumber,
                  firstNumber: mobilecorrectinput,
                });
              }}
            ></CFormInput>
          </CCol>
          <CCol xs={2}>
            <CFormInput
              style={{ width: "120%" }}
              type="tel"
              value={mobileNumber.secondNumber}
              onChange={(e) => {
                let mobilenumber = e.target.value;
                let mobileinput = mobilenumber.replace(/[^0-9]/g, "");
                let mobilecorrectinput = mobileinput.slice(0, 1);
                SetmobileNumber({
                  ...mobileNumber,
                  secondNumber: mobilecorrectinput,
                });
              }}
            ></CFormInput>
          </CCol>
          <CCol xs={2}>
            <CFormInput
              style={{ width: "120%" }}
              type="tel"
              value={mobileNumber.thirdNumber}
              onChange={(e) => {
                let mobilenumber = e.target.value;
                let mobileinput = mobilenumber.replace(/[^0-9]/g, "");
                let mobilecorrectinput = mobileinput.slice(0, 1);
                SetmobileNumber({
                  ...mobileNumber,
                  thirdNumber: mobilecorrectinput,
                });
              }}
            ></CFormInput>
          </CCol>
          <CCol xs={2}>
            <CFormInput
              style={{ width: "120%" }}
              type="tel"
              value={mobileNumber.fourthNumber}
              onChange={(e) => {
                let mobilenumber = e.target.value;
                let mobileinput = mobilenumber.replace(/[^0-9]/g, "");
                let mobilecorrectinput = mobileinput.slice(0, 1);
                SetmobileNumber({
                  ...mobileNumber,
                  fourthNumber: mobilecorrectinput,
                });
              }}
            ></CFormInput>
          </CCol>
          <CCol xs={2}>
            <CFormInput
              style={{ width: "120%" }}
              type="tel"
              value={mobileNumber.fifthNumber}
              onChange={(e) => {
                let mobilenumber = e.target.value;
                let mobileinput = mobilenumber.replace(/[^0-9]/g, "");
                let mobilecorrectinput = mobileinput.slice(0, 1);
                SetmobileNumber({
                  ...mobileNumber,
                  fifthNumber: mobilecorrectinput,
                });
              }}
            ></CFormInput>
          </CCol>
          <CCol xs={2}>
            <CFormInput
              style={{ width: "120%" }}
              type="tel"
              value={mobileNumber.sixthNumber}
              onChange={(e) => {
                let mobilenumber = e.target.value;
                let mobileinput = mobilenumber.replace(/[^0-9]/g, "");
                let mobilecorrectinput = mobileinput.slice(0, 1);
                SetmobileNumber({
                  ...mobileNumber,
                  sixthNumber: mobilecorrectinput,
                });
              }}
            ></CFormInput>
          </CCol>
        </CRow>

        <CButton
          className="mt-1"
          style={{ width: "100%", color: "white" }}
          color="danger"
          onClick={() => {
            SendOTPVerificationCode();
          }}
        >
          Verify
        </CButton>
      </div>
    </div>
  );
};

export default OTPVerification;
