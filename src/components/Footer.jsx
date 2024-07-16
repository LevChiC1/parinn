import React from 'react'
import '../css/Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='sectors'>
                <div className='sector'>
                    <p>ПАРТНЕРЫ</p>
                    <p>Дворец культуры железнодорожников г. Нижнего</p>
                    <p>Новгорода</p>
                    <p>Центр культуры и досуга г. Нижнего Новгорода</p>
                </div>
                <div className='sector'>
                    <p>ПРОЕКТ</p>
                    <p>О проекте</p>
                    <p>Помощь</p>
                    <p>Правила</p>
                    <p>Контакты</p>
                </div>

                <div className='sector'>
                    <p>ПОЛЬЗОВАТЕЛЯМ</p>
                    <p>Войти</p>
                    <p>Регистрация</p>
                    <br />
                    <p>КАТЕГОРИЯ</p>
                    <p>Культура и спорт</p>
                </div>

                <div className='sector'>
                    <p>РЕГИОН</p>
                    <p>Нижний Новгород</p>
                    <br />
                    <p>ОБРАТНАЯ СВЯЗЬ</p>
                    <br />
                    <p>ВОПРОС-ОТВЕТ</p>
                </div>
            </div>

            <p className='other'>©️2013-2024 ФКУ «Цифровая культура». Все права защищены</p>
        </div>
    )
}