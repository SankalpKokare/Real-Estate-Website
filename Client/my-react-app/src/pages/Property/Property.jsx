import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";
import "./Property.css";

function Property() {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property detail</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="wrapper">
        <div className="flexColStart paddings innerWidth property-container">
          <div className="like">
            <AiFillHeart size={24} color="white" />
          </div>
          <img src={data?.image} alt="home image" />
          <div className="flexCenter property-details">
            {/* left */}
            <div className="flexColStart left">
              {/* head */}
              <div className="flexStart head">
                <span className="primaryText">{data?.title}</span>
                <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                  $ {data?.price}
                </span>
              </div>

              {/* facilities */}
              <div className="flexStart facilities">
                {/* bathroom */}
                <div className="flexStart facility">
                  <FaShower size={20} color="#1F3E72" />
                  <span>{data?.facilities?.bathrooms} Bathrooms</span>
                </div>
                {/* Parking */}
                <div className="flexStart facility">
                  <AiTwotoneCar size={20} color="#1F3E72" />
                  <span>{data?.facilities.parking} Parking</span>
                </div>
                {/* Rooms */}
                <div className="flexStart facility">
                  <MdMeetingRoom size={20} color="#1F3E72" />
                  <span>{data?.facilities.bedrooms} Rooms</span>
                </div>
              </div>

              {/* description */}
              <span className="secondaryText" style={{ textAlign: "justify" }}>
                {data?.description}
              </span>

              {/* Address */}
              <div className="flexStart" style={{ gap: "1rem" }}>
                <MdLocationPin size={25} />
                <span className="secondaryText">
                  {data?.address}
                  {data?.city}
                  {data?.country}
                </span>
              </div>

              {/* Booking Button */}
              {<button className="button">Book your Visit</button>}
            </div>

            {/* Right side */}
            <div className="map">
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;
