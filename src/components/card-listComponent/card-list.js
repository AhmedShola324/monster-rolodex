import React from 'react'
import Card from '../cardComponent/card'
import './card-listStyle.css'


const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />)
            )}
        </div>
    );
}

export default CardList;