import React from 'react';
import Card from './card/Card';
import sApp from "./app.module.scss"
const SneakersMans = (props) => {
  
    return (
        <div>
                    <div className={sApp.sectionHeader}>
                    <h3>{props.searchValue ? `Поиск по запросу: ${props.searchValue}` : 'Все кроссовки'}</h3>
                    </div>
                    <div className={sApp.item}>
                    {props.items.filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map((item, id) => <Card 
                    key={id}
                    {...item}
                    onFavorite = {(obj) => props.onAddToFavorite(obj)}
                    onPlus = {(obj) => props.onAddToCard(obj)}
                    added = {props.cartItems.some(obj => Number(obj.id) === Number(item.id))}
                    />)}
                    </div>
        </div>
    )
};
export default SneakersMans;
//items.filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map