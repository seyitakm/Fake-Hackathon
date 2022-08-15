import * as React from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";

export default function GamesCard({ item }) {
  const { deleteGames } = useProducts();

  const navigate = useNavigate();
  console.log(item);
  return (
    <div className="card">
      <img className="card--img" src={item.picture} alt="" />
      <h3>{item.name}</h3>
      <div className="card--descr">${item.price}</div>
      <div className="buttons">
        <button>More</button>
        <button onClick={() => navigate(`/editgames/${item.id}`)}>Edit</button>
        <button onClick={() => deleteGames(item.id)}>Delete</button>
      </div>
    </div>
  );
}
