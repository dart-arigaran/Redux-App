import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../Component/ProductListItem";
import { Productlist } from "../Data/Productlist";
import { modifyItem, removeItem } from "../Redux/Card";

export default function AddtoCard() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const IncrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };
  const DecrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const RemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {list.length > 0 ? (
        list.map((item) => (
          <ProductListItem
            {...item}
            key={item.id}
            IncrementItem={() => IncrementItem(item)}
            DecrementItem={() => DecrementItem(item)}
            RemoveItem={() => RemoveItem(item)}
          />
        ))
      ) : (
        <h2>No item is selected ,Select One</h2>
      )}
    </div>
  );
}
