import React from 'react';
import axios from 'axios';
import Card from './card/Card';
import sApp from "./app.module.scss"
const SneakersFemale = (props) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://63ff4068571200b7b7d95068.mockapi.io/items').then((res)=>setItems(res.data)); },[]);
    return (
        <div>
                    <div className={sApp.sectionHeader}>
                    <h3>{props.searchValue ? `Поиск по запросу: ${props.searchValue}` : 'Женские кросовки'}</h3>
                    </div>
                    <div className={sApp.item}>
                    {items.filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map((item, id) => <Card 
                    key={id}
                    {...item}
                    onFavorite = {(obj) => props.onAddToFavorite(obj)}
                    onPlus = {(obj) => props.onAddToCard(obj)} />)}
                    </div>
        </div>
    )
};
export default SneakersFemale;
//items.filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map