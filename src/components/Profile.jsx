import React, { Component } from 'react'
import logo from '../images/Ava.png'
import Header from '../components/Header.jsx'
import '../css/Profile.css'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      points: 2,
      refs: 1
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className='full_profile'>
        <div className='profile_title'>Личный кабинет</div>

          <div className='profile'>

            <div className='stats'>
              <div className='stat'>
                <p className='stat_name'>Александров Виктор</p>
              </div>

              <div className='stat'>
                <p className='stat_name'>Баллы: {this.state.points}</p>
              </div>

              <div className='stat'>
                <p className='stat_name'>Реферальная ссылка</p>
                <a className='sub_stat' href="#">Твоё личное приглашение для друзей</a>
              </div>

              <div className='stat'>
                <p className='stat_name'>Твои рефералы: {this.state.refs}</p>
                <p className='sub_stat'>Люди, перешедшие по твоей ссылке</p>
              </div>
            </div>
            <div className='ava_sector'>
              <img className='ava_img' src={logo} alt="" />
              <div className='profile_buts'>
                <button className='ed_but'>Изменить имя</button>
                <button className='ed_but'>Изменить фото</button>

              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }
}
