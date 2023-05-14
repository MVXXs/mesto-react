import React from "react";

export default function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

  return (
    <article className="element">
    <img src={props.link} alt={`изображение ${props.card.name}`} className="element__image" onClick={handleCardClick}/>
    <div className="element__items">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
            <button className="element__like" type="button"></button>
            <span className="element__counter">{props.likes.length}</span>
        </div>
    </div>
    <button className="element__delete"></button>
</article>
  )
}