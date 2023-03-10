import styles from './card.module.scss';
import React from 'react';
const Card = ({imageUrl, title, price, id, onPlus, onFavorite, favorite, added = false}) => {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  const onClickPlus = () => {
    onPlus({imageUrl, title, price, id});
    setIsAdded(!isAdded);
  }
  const onClickFavorite = () => {
    onFavorite ({imageUrl, title, price, id});
    setIsFavorite(!isFavorite);
  }
    return (
        <div>
            {/*Структура карточки товара*/}
            <div className={styles.card}>
              <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/hearts138533.png' : 'img/heart4355853.png'} alt='Избранное'></img>
              </div>
            <img width={140} height={115} src={imageUrl} alt="Фото обуви"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              <button className={styles.button} onClick={onClickPlus}>
                <img width={20} height={20} src={isAdded ? "/img/checkbox50.png" : "/img/plus_47697.png"} alt="Добавить" />
              </button>
            </div>
          </div>
        </div>
    )
}
export default Card;