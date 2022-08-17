import * as React from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";

export default function GamesCard({ item }) {
  const { addProductToCart } = useCart();
  const { deleteGames } = useProducts();
  const navigate = useNavigate();

  const user = localStorage.getItem("username");
  console.log(user);

  return (
    <div className="card">
      <img className="card--img" src={item.picture} alt="" />
      <h3>{item.name}</h3>
      <div className="card--descr">${item.price}</div>
      {user === "admin@admin.com" ? (
        <div className="buttons">
          <button onClick={() => navigate(`/editgames/${item.id}`)}>
            Edit
          </button>
          <button onClick={() => deleteGames(item.id)}>Delete</button>
        </div>
      ) : (
        <div className="buttons">
          <button onClick={() => navigate(`/payment/${item.id}`)}>Buy</button>
          <button onClick={() => navigate(`/more/${item.id}`)}>More</button>
          <button onClick={() => addProductToCart(item)}>ToCart</button>
        </div>
      )}
    </div>
  );
}
