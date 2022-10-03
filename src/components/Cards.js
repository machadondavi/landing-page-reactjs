import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Conheça-me</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                         src="../images/tecnicas.jpg"
                         text="Conheça minhas modalidades de atendimento"
                         label='Serviços'
                         path='/services'
                        />
                        <CardItem
                         //src='images/img-3.jpg'
                         text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                         label='Mystery'
                         path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                         //src='images/img-3.jpg'
                         text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                         label='Mystery'
                         path='/services'
                        />
                        <CardItem
                         //src='images/img-4.jpg'
                         text='Experience Football on Top of the Himilayan Mountains'
                         label='Adventure'
                         path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
