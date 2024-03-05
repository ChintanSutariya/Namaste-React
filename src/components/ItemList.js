import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "./../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  //   console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((lineItem) => (
        <div
          key={lineItem.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{lineItem.card.info.name}</span>
              <span>
                - ₹
                {lineItem.card.info.price
                  ? lineItem.card.info.price / 100
                  : lineItem.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{lineItem.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-2 relative flex justify-around ">
            <div className="absolute bottom-0 mx-auto py-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                onClick={() => handleAddItem(lineItem)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + lineItem.card.info.imageId}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
