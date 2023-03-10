import React from "react";
import sModal from "./modal.module.scss";
const Modal = ({onRemove, onClose, items = []}) => {
    let summ = 0;
    let percent = 0;
    return (
        <div className={sModal.modal}>
            <div className={sModal.modalBox}>
                <button className={sModal.close} onClick={onClose}>Закрыть</button>
                <h2>Корзина</h2>
            {items.map((obj, id) => ( 
              summ = summ + obj.price,
              percent = summ / 10 * 0.3,
                <div key={id}>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage:`url(${obj.imageUrl})`}} className="cartItemImg"></div>
                            <div className="mr-15 flex">
                              <p className="mb-5">{obj.title}</p>
                              <b>{obj.price}</b>
                            </div>
                        <img onClick={()=>onRemove(obj.id)} className="removeBtn" width={25} height={25} src="/img/clear.svg" alt="remove"/>
                    </div>
                </div> 
            ))}
            <div className={sModal.total}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{summ}</b>
                </li>
                <li>
                  <span>Налог 3%:</span>
                  <div></div>
                  <b>({percent.toFixed(2)}) = {summ + percent}</b>
                </li>
              </ul>
              <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;