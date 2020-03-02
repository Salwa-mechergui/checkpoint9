import React from 'react'
import './ListeMovie.css';

export default function ListeMovie(props) {
    return (
        <div className="container-cards"> 
            {props.tab.map((el,i)=> (
                <div className="Card">
                    <img src={el.movieImage}/>
                     <p>{el.movieName}</p>
                     <p>{el.movieDuration}</p>
                     <p>{el.ration}</p>
                </div>
            ))}
        </div>
    )
}
