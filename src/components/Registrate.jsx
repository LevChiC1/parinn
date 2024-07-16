import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Login.css'
import logo from '../images/pari_nn.png'

export default class Registrate extends Component {
  render() {
    return (
      <div className='login'>
        <img className='logo_img' src={logo} alt="" width={178} height={247} />
        <div className='log_dis'>
            <p className='login_title'>Регистрация</p>
            <p className='login_dis'>Создайте новый аккаунт!</p>
        </div>
        <div className='log_text'>
        <input className="ref_input" type="text" placeholder='Фамилия'/>
        <input className="ref_input" type="text" placeholder='Имя'/>
            <input className="ref_input" type="text" placeholder='Телефоный номер или эл. почта'/>
            <input className="ref_input" type="text" placeholder='Пароль'/>
            <input className="ref_input" type="text" placeholder='Подтвердите пароль'/>
            <div className='under_links'>
                <Link to={`/`}>Уже есть аккаунт</Link>
            </div>
            <Link to={'/main'}><button className='submit_but'>Подтвердить</button></Link>
        </div>
      </div>
    )
  }
}
