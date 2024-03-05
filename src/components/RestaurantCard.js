import { CDN_URL } from "./../utils/constants";
import UserContext from "../utils/UserContext";
// import { useState, useEffect, useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  // const { slaString } = c;
  // console.log(props);
  // const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  return (
    <div
      className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info.sla.slaString}</h4>
      {/* <h4>User: {loggedInUser}</h4> */}
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard => Promoted RestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-500 text-white px-2 mx-4 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
