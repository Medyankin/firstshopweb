import React from 'react';
import sHeader from './header.module.scss';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const onChangeSearch = (event) => {
        props.setSearchValue(event.target.value);
      }

    return (
        <div>
            <div className={sHeader.header}>
                    <div className={sHeader.inner}>   
                        <Link className={sHeader.logo} to='/'>Кроссовки</Link>
                        <nav className={sHeader.nav}>
                            <Link className={sHeader.link} to='/sneakersmans'>Все кроссовки</Link>
                            {/*<Link className={sHeader.link} to='/sneakersfemale'>Женские</Link>*/}
                            <Link className={sHeader.link} to='/favorites'>Избранные</Link>
                            <a className={sHeader.link} onClick={props.openDrawer}>Корзина</a>
                            <a className={sHeader.link} href='/'>Что-то еще</a>
                        </nav>
                    </div>
            <div className={sHeader.intro}>
                    <div className={sHeader.title}>
                        <h3 className={sHeader.supTitle}>У нас лучшие кроссовки</h3>
                        <h1>MoGo</h1>
                    </div>
                    <div className={sHeader.searchBlock}>
                        <img width={25} height={25} src='./img/search.jpg' alt="Search" />
                        <input onChange={onChangeSearch} value={props.searchValue} placeholder='Поиск...'></input>
                        {props.searchValue && <img clasName={sHeader.clear} onClick={() => props.setSearchValue('')} width={25} height={25} src='./img/mark_17048.png' alt='Clear'/>}
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Header;