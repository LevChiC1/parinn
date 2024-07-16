import React from 'react'
import Banner from './Banner'
import Events from './Events'
import Header from './Header'
import Shop from './Shop'

export default function Main_list() {
    return (
        <div>
            <Header />
            <div className='main_list'>
                <Banner />
                <Events />
                <Shop/>
            </div>
        </div>

    )
}