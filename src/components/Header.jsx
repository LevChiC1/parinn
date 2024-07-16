import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/Header.css'
import searcher from '../images/icons8-поиск 1.svg'

export default function Header() {
    return (
        <div className='header'>
            <img src='https://api.fcnn.ru/upload/iblock/395/fnzp0o15hxummm2tmusg4zb0m7wbvkzu/logo_color.svg' alt="" width={70} />
            <div className='links'>
                <NavLink className='header_link' to={'/main'}>Главная</NavLink>
                <NavLink className='header_link' to={'/add_ticket'}>Добавить билет</NavLink>
                <NavLink className='header_link' to={'/profile'}>Личный кабинет</NavLink>
            </div>
            <img src='https://api.fcnn.ru/upload/iblock/395/fnzp0o15hxummm2tmusg4zb0m7wbvkzu/logo_color.svg' alt="" width={70} />
        </div>
    )
}