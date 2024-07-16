import img1 from '../images/img1.png'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'
import EventCard from './EventCard'
import React, { Component } from 'react'
import '../css/Events.css'

export default class akjsh extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [{
        id: '1',
        image: img1,
        name: 'Пари НН vs ЦСК, полуфинал',
        date: '21 ноября 2024, 19:00',
        place: 'Стадиона Нижний Новгород'
      },
      {
        id: '2',
        image: img4,
        name: 'Гастроли Московского театра комедии - История любви',
        date: '17 ноября 2024, 19:00',
        place: 'КЗ Юпитер'
      },
      {
        id: '3',
        image: img5,
        name: 'НОТР ДАМ ДЕ ПАРИ. РОМЕО И ДЖУЛЬЕТТА. МЮЗИКЛ-ШОУ',
        date: '22 октября 2024, 19:00',
        place: 'КЗ Юпитер'
      },
      {
        id: '4',
        image: img6,
        name: 'Балетная постановка «Сияющая птица»',
        date: '19 сентября 2024, 18:00',
        place: 'КЗ Юпитер'
      }
      ]
    }
  }

  render() {
    return (
      <div className='events'>
        <h1 className='events_title'>Ближайшие мероприятия</h1>
        <div className='event_list'>
          <EventCard event={this.state.events[0]} />
          <EventCard event={this.state.events[1]} />
          <EventCard event={this.state.events[2]} />
          <EventCard event={this.state.events[3]} />
        </div>

      </div>
    )
  }
}
