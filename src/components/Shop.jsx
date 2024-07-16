import React, { Component } from 'react'
import Item from './Item'
import img1 from '../images/item1.png'
import img2 from '../images/item2.png'
import img3 from '../images/item3.png'
import '../css/Shop.css'

export default class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    id: 1,
                    img: img1,
                    cost: 5,
                    dis: 'Фирменный мерч команды',
                },
                {
                    id: 2,
                    img: img2,
                    cost: 10,
                    dis: 'Официальная форма футболиста с росписями игроков клуба',
                },
                {
                    id: 3,
                    img: img3,
                    cost: 15,
                    dis: 'Таинственный подарок от партнеров',
                },
            ]
        }
    }

    render() {
        return (
            <div className='shop'>
                <h1 className='shop_title'>Призы</h1>
                <div className='items'>
                    <Item item={this.state.items[0]} />
                    <Item item={this.state.items[1]} />
                    <Item item={this.state.items[2]} />
                </div>
            </div>
        )
    }
}
