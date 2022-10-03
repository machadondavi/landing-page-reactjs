import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Me conheça</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className="cards__items">
                        <CardItem
                         //src='images/img-3.jpg'
                         text='Conheça minha jornada'
                         label='Apresentação'
                         path='/apresentacao'
                        />
                        <CardItem 
                         src="images/tecnicas.jpg"
                         text="Conheça minhas modalidades de atendimento"
                         label='Modalidades de Atendimento'
                         path='/services'
                        />
                       
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                         src='images/servicos.jpg'
                         text='Conheça as técnicas que podem mudar seu bem-estar'
                         label='Técnicas'
                         path='/products'
                        />
                        <CardItem
                         src='images/portfolio.jpg'
                         text='Conheça o local pronto para te atender'
                         label='Nosso espaço'
                         path='/nosso-espaco'
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default Cards
