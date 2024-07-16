import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Login.css'
import logo from '../images/pari_nn.png'

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <img className='logo_img' src={logo} alt="" width={178} height={247} />
        <div className='log_dis'>
            <p className='login_title'>Вход</p>
            <p className='login_dis'>Используйте зарегистрированный аккаунт!</p>
        </div>
        <div className='log_text'>
            <input className="ref_input" type="text" placeholder='Телефоный номер или эл. почта'/>
            <input className="ref_input" type="text" placeholder='Пароль'/>
            <div className='under_links'>
                <Link to={`/registrate`}>Регистрация</Link>
                <Link>Забыл пароль</Link>
            </div>
            <Link to={'/main'}><button className='submit_but'>Подтвердить</button></Link>
            
        </div>
      </div>
    )
  }
}
