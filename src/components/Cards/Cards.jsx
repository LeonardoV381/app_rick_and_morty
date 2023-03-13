import React from 'react';
import Card from '../Card/Card';
import styleCards from './Cards.module.css';

export default function Cards(props) {
    const { characters } = props;
    return ( 
    <div className={styleCards.cards}>
        {characters.map(personajes =>
          <Card key ={personajes.id}
          onClose={()=> props.onClose(personajes.id)}
          name={personajes.name}
          species={personajes.species}
          gender= {personajes.gender}
          image= {personajes.image}
          />
          )}
    </div>
)
}

