import React, { Component } from 'react'

export default class akjsh extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: {
                id: '1',
                img: img1,
                name: 'Концерт «MACAN»',
                date: '3 августа 2024, 20:00',
                place: 'Стадион «ТРУД»'
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Ближайшие мероприятия</h1>
                <div className='events'>
                    <EventCard />
                </div>

            </div>
        )
    }
}
