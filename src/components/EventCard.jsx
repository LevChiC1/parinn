import React, { Component } from 'react'

export default class EventCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event: this.props.event
    }
  }

  render() {
    return (
      <div className='event_card'>
        <img src={this.state.event.image} alt="" width={450} />
        <div className='card_dis'>
          <h2 className='card_name'>{this.state.event.name}</h2>
          <div className='discription'>
            <p className='dis'>{this.state.event.date}</p>
            <p className='dis'>{this.state.event.place}</p>
            <button className='more_but'>Подробнее</button>
          </div>
          
        </div>
      </div>
    )
  }
}
