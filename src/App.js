import React from "react";
import axios from "axios";
//import Drawer from "./components/drawer/Drawer";
import Header from "./components/header/Header";
import sApp from "./components/app.module.scss"
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/favorites/Favorites";
import SneakersMans from "./components/SneakersMans";
//import SneakersFemale from "./components/SneakersFemale";
import Home from "./components/Home";
import Modal from "./components/Modal";

  function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [favorites, setFavorites] = React.useState([]);

    React.useEffect(() => {
      async function fetchData() {
      const cartResponse = await axios.get('https://63ff4068571200b7b7d95068.mockapi.io/cart');
      const itemResponse = await axios.get('https://63ff4068571200b7b7d95068.mockapi.io/items');
      setCartItems (cartResponse.data);
      setItems (itemResponse.data);
      }
      fetchData();
    }, []);

    const onRemoveItem = (id) => {
      axios.delete(`https://63ff4068571200b7b7d95068.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item)=>item.id !== id));
    }

    const onAddToCard = (obj) => {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://63ff4068571200b7b7d95068.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))
      }
      else {
        axios.post('https://63ff4068571200b7b7d95068.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    }

      const onAddToFavorite = async (obj) => {
        if (favorites.find ((objFav) => objFav.id === obj.id)) {
          axios.delete(`https://63ff4068571200b7b7d95068.mockapi.io/cart/${obj.id}`);
          setFavorites((prev) => prev.filter((item)=>item.id !== obj.id));
        }
        else {
        const {data} = await axios.post('https://63ff4068571200b7b7d95068.mockapi.io/cart', obj);
        setFavorites((prev) => [...prev, data]);
        }
    }
    
    return (
      <div>
          {openDrawer && <Modal items = {cartItems} onClose = {() => setOpenDrawer(false)} onRemove={onRemoveItem}/>}
          <Header openDrawer = {() => setOpenDrawer(true)} searchValue={searchValue} setSearchValue={setSearchValue}/>
          <section className={sApp.section}>
          <Routes>
              <Route path="/" element = {
                <Home />
              }/>
              <Route path="/sneakersmans" element = {
                <SneakersMans 
                  items={items} 
                  searchValue={searchValue} 
                  onAddToCard={onAddToCard} 
                  onAddToFavorite={onAddToFavorite} 
                  cartItems={cartItems} />
              } />
              {/*
              <Route path="/sneakersfemale" element = {
                <SneakersFemale searchValue={searchValue} onAddToCard={onAddToCard} onAddToFavorite={onAddToFavorite}/>
              } />*/}
              <Route path="/favorites" element = {
                <Favorites 
                  items = {cartItems}
                  favorites= {favorites}
                  setFavorites = {setFavorites} />
              } />
            </Routes>
          </section> 
        </div>
    );
  }
  export default App;
  //.then((res)=>setCartItems(res.data))
  //.then((res)=>setItems(res.data))