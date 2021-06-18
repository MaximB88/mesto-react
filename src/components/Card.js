import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.data);
      } 
    
    return(
        <div className="post">
            <div className="post__photo-area">    
                <img className="post__photo" src={props.data.link} alt={props.data.name} onClick={handleClick} />
                <button type="button" className="button post__delete-button"></button>
            </div>  
            <div className="post__description">
                <h2 className="post__title">{props.data.name}</h2>
                <div className="post__likes">
                    <button type="button" className="button post__like-button"></button>
                    <p className="post__likes-count">{props.data.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;