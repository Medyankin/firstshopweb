import React from "react";
import axios from "axios";
import sFavorites from "./favorites.module.scss";
import Card from "../card/Card";
const Favorites = ({items, favorites, setFavorites}) => {

    const onRemoveFavorite = (id) => {
        axios.delete(`https://63ff4068571200b7b7d95068.mockapi.io/cart/${id}`);
        setFavorites((prev) => prev.filter((item)=>item.id !== id));
      }
    return (
        <div>
            <div className={sFavorites.sectionHeader}>
                <h3>Избранные</h3>
            </div>
            <div className={sFavorites.item}>
                {items.map((item, id) => <Card key={id}
                {...item}
                favorite = {true}
                onRemFav = {onRemoveFavorite}
                />)}
            </div>
        </div>
    )
};
export default Favorites;