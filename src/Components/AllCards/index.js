import Card from '../Card';
import React from 'react';
const AllCards = (props) => {
  // console.log(props);
  return (
    
    props.cardsJSON.map((card) => 
      <Card 
      date={card.date} 
      readingTime={card.readingTime} 
      title={card.title} 
      description={card.description} 
      claps={card.claps} 
      liked={card.liked}
      imageURL ={`./Images/${card.image}`}
      />
      )
  );
}

export default AllCards;