import React, { useEffect, useState } from "react";
import "../App.css"; // You can remove this line if not needed
import { CButton, CCol, CFormInput, CRow } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { baseURL } from "../baseUrl";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import img from "../IMages/4.jpeg";
import img2 from "../IMages/2.jpeg";
import RestaurantDetails from "./RestaurantDetails";

const Resturant = () => {
  const navigate = useNavigate();
  const [listOfRestaurant, SetlistOfRestaurant] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const token = sessionStorage.getItem("Token");
    baseURL
      .get("/m/restaurant?city_id=118&&", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data, "mxsmdsdsds");
        SetlistOfRestaurant(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const Move_to_restaurant = (index) => {
    navigate("/RestaurantDetails", {
      state: { list: listOfRestaurant[index] },
    });
  };
  const handleAutoSwipe = () => {
    const newIndex = (activeImageIndex + 1) % listOfRestaurant.length;
    setActiveImageIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleAutoSwipe();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeImageIndex, listOfRestaurant.length]);

  return (
    <div className="wrapper">
      {/* for the mainbar of location */}
      <div className="header-div">
        <p className="mx-4 paragraph">Pre Order From</p>
        <p className="mx-4 bold-paragraph">Connaught Place</p>
      </div>

      {/* For the exploring */}
      <div className="mx-2 explore-div">
        <h3 className="mx-4 mt-2 paragraph">Karan</h3>
        <p className="mx-4">Lets explore this evening</p>
      </div>

      {/* For the side one where we have offers and wallet */}
      <div className="side-div">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "20%" }}>
            <CIcon
              icon={icon.cilBlurCircular}
              size="xxl"
              style={{ color: "orange" }}
            />
            <CIcon
              icon={icon.cilWallet}
              size="xxl"
              style={{ color: "blue", marginLeft: "10%" }}
            />
          </div>
          <div style={{ display: "flex", gap: "10%", flexDirection: "row" }}>
            <p>Offers</p>
            <p>Wallet</p>
          </div>
        </div>
      </div>

      {/* For the Taste near by */}
      <div className="mt-4 mx-2 taste-div">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5%",
            overflowY: "auto",
          }}
        >
          <div className="Taste-restaurant">
            <img src={img} className="taste-images"></img>
            <h5 className="mx-2">Niks Bakers</h5>
            <p className="mx-2" style={{ width: "90%" }}>
              Cannaught Place Delhi
            </p>
          </div>
          <div className="Taste-restaurant">
            <img src={img} className="taste-images"></img>
            <h5 className="mx-2">Niks Bakers</h5>
            <p className="mx-2" style={{ width: "90%" }}>
              Cannaught Place Delhi
            </p>
          </div>
          <div className="Taste-restaurant">
            <img src={img} className="taste-images"></img>
            <h5 className="mx-2">Niks Bakers</h5>
            <p className="ms-2" style={{ width: "90%" }}>
              Cannaught Place Delhi
            </p>
          </div>
          <div className="Taste-restaurant">
            <img src={img} className="taste-images"></img>
            <h5 className="mx-2">Niks Bakers</h5>
            <p className="mx-2" style={{ width: "90%" }}>
              Cannaught Place Delhi
            </p>
          </div>
        </div>
      </div>

      {/* For the Dish-images */}
      <div className="mt-3 mx-2 text-center dish-header">
        {listOfRestaurant && listOfRestaurant.length > 0 ? (
          <img
            className="dish-images"
            src={listOfRestaurant[activeImageIndex].images[0].url}
            alt={`Restaurant ${activeImageIndex + 1}`}
            // onClick={() => Move_to_restaurant(activeImageIndex)}
          />
        ) : (
          <p>No restaurants available</p>
        )}
      </div>

      {/* For the List of Restaurant */}
      <div>
        <h2 className="mt-3 mx-2">Popular Ones</h2>
        <div
          className="mx-2"
          style={{ display: "flex", flexDirection: "column", gap: "10%" }}
        >
          {listOfRestaurant && listOfRestaurant.length < 1
            ? " "
            : listOfRestaurant.map((item, index) => {
                return (
                  <div
                    style={{ position: "relative" }}
                    key={item.restaurant_id}
                    onClick={() => {
                      Move_to_restaurant(index);
                    }}
                  >
                    <img className="popular-images " src={item.images[0].url} />
                    <div className="populerones-info">
                      <h6>{item.restaurant_name}</h6>
                      <p style={{ marginTop: "-5%" }}>
                        {item.cuisines && item.cuisines.length > 0
                          ? item.cuisines[0].cuisine_name
                          : "No Cuisine "}
                      </p>
                      <p style={{ marginTop: "-12%" }}>
                        {item.location
                          ? item.location.location_address_2
                          : "No Location"}
                      </p>
                      <p style={{ marginTop: "-12%" }}>
                        {item.location
                          ? item.location.location_locality
                          : "No Location"}
                      </p>
                      <p style={{ marginTop: "-12%" }}>
                        {" "}
                        <CIcon
                          icon={icon.cilBan}
                          size="sm"
                          style={{ color: "red" }}
                        />
                        <span className="mx-2" style={{ color: "red" }}>
                          4 Offer Trending
                        </span>
                      </p>
                      <div
                        style={{
                          marginTop: "-12%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>
                          <CIcon
                            icon={icon.cilStar}
                            size="sm"
                            style={{ color: "black" }}
                          />
                          {item.rating && item.rating.restaurant_avg_rating}
                        </span>
                        <span>
                          {`${item.currency.symbol} ${
                            item.rating && item.rating.count
                          }`}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "10px",
                        }}
                      >
                        <span>Popularity</span>
                        <span>Cost For Two</span>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Resturant;
