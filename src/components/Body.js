import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "./../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const convertedJson = await data.json();
    // Optional Chaining
    console.log(convertedJson);
    setListOfRestaurants(
      convertedJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
        ? convertedJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : convertedJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );
    setFilteredRestaurants(
      // convertedJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      convertedJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
        ? convertedJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : convertedJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You're offline. Please check your internet connection.</h1>;
  }
  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // console.log(listOfRestaurants);
  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-4">
          <input
            type="text"
            placeholder="Search for Restaurants"
            className="border border-solid border-black"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-2 bg-blue-100 rounded-lg"
            onClick={() => {
              const fileredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestaurants(fileredList);
              setFilteredRestaurants(fileredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-4">
          <button
            className="px-4 py-2 m-2 bg-blue-100"
            onClick={() => {
              const fileredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              setListOfRestaurants(fileredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className=" m-2 p-4 flex items-center">
          <label className="mr-2">User Name</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardWithPromotedLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
            {/* <RestaurantCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
