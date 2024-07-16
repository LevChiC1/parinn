import React, { Component } from 'react'
import Header from './Header'
import '../css/AddTicket.css'
import logo from '../images/pari_nn.png'

export default class AddTicket extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='add'>
                    <p className='ticket_title'>Добавить билет</p>
                    <div><img src={logo} alt="" /></div>
                    <div className='add_buttons'>
                        <button className='submit_but_add'>Загрузить фото</button>
                        <button className='submit_but_add'>Ввети номер билета</button>
                    </div>
                    <p className='warning_dis'>*Для получения необходимого балла - нужно добавить четкое фото билета, содержащие штрих код или же ввести номер самого билета</p>
                </div>
            </div>
        )
    }
}
