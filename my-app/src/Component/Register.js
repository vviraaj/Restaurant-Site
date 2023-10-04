import React, { useState } from "react";
import "../App.css";
import { CButton, CFormInput } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { baseURL } from "../baseUrl";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [mobileNumber, SetmobileNumber] = useState("");
  const [message, Setmessage] = useState("");

  const SendRegistrationCode = () => {
    let postdata = {
      dial_code: "+91",
      phone: mobileNumber,
    };
    baseURL
      .post("/pwa/user/register", postdata)
      .then((response) => {
        if (response.data && response.data.error) {
          Setmessage(response.data.error[0].error);
          
        } else {
          if (response.data.status == "Success") {
            Setmessage(response.data.data);
          }
          setTimeout(() => {
            Setmessage("");
            navigate(`/Verification?${mobileNumber}`);
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
        <h3>Enter Your Mobile Number</h3>
        <p>We will send you the 4 digit verification code</p>
        <CFormInput
          type="tel"
          placeholder="Enter Your mobile Number"
          value={mobileNumber}
          onChange={(e) => {
            let mobilenumber = e.target.value;
            let mobileinput = mobilenumber.replace(/[^0-9]/g, "");
            let mobilecorrectinput = mobileinput.slice(0, 10);
            SetmobileNumber(mobilecorrectinput);
          }}
        ></CFormInput>
        <CButton
          className="mt-1"
          style={{ width: "100%", color: "white" }}
          color="danger"
          onClick={() => {
            SendRegistrationCode();
          }}
        >
          Send Code
        </CButton>
      </div>
    </div>
  );
};

export default Registration;
