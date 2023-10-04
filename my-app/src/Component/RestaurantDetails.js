import React from "react";
import "../App.css";
import img3 from "../IMages/3.jpeg";
import { useLocation } from "react-router-dom";
import { CCard, CCardBody } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const RestaurantDetails = () => {
  const { state } = useLocation();
  const listOfRestaurant = state && state.list;

  return (
    <div style={{ position: "relative" }}>
      <img
        src={listOfRestaurant.images[0].url}
        alt="Restaurant Image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "0px 0px 10px 10px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.4)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "150%",
          left: "49%",
          width: "100%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          zIndex: 2,
          backgroundColor: "white",
          padding: "10px", // Optional: Add padding for better visibility
        }}
      >
        <div className="mx-4 mt-4">
          <h6>{listOfRestaurant.restaurant_name}</h6>
          <span style={{ float: "right", marginTop: "-12%" }}>
            <CIcon icon={icon.cilStar} size="sm" style={{ color: "black" }} />
            {listOfRestaurant.rating &&
              listOfRestaurant.rating.restaurant_avg_rating}
          </span>
          <p style={{ marginTop: "-15%" }}>
            {listOfRestaurant.location
              ? listOfRestaurant.location.location_address_2
              : "No Location"}
          </p>

          <p className="mx-2 mt-4" style={{ fontSize: "10px" }}>
            <CIcon icon={icon.cilBan} size="sm" style={{ color: "red" }} />
            <span className="mx-2" style={{ color: "red" }}>
              4 Offer Trending
            </span>
          </p>
          <p className="mt-5">
            The prices should range from moderately expensive to reasonable to
            attract a wide spectrum of patrons. The ambience should be as per
            the tradition and culture of Culinary Region. It should exhibit the
            flavour and ethnicity of the region chosen. The timings of the
            restaurant are mostly from 3pm to 12pm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
