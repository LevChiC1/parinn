import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         item: this.props.item
      }
    }
    
  render() {
    return (
      <div className='item'>
        <div className='item_img'>
            <img src={this.state.item.img} alt="" />
        </div>
        <p className='item_cost'>{this.state.item.cost} Баллов</p>
        <p className='item_dis'>{this.state.item.dis}</p>
      </div>
    )
  }
}
