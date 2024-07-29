import React, { useState } from "react";
import './Pet.css'

function Pet(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    return (
        <div className="pet-card">
            <p className="pet-title">{props.name}'s Pet Card!</p>
            <p>Owner: {props.owner}</p>
            <p>Age: {props.age}</p>
            <p>Specie: {props.specie}</p>
            <p>Weight: {props.weight}</p>
            <div className="button-container">
                <button className="button-like" onClick={() => setLikes(likes + 1)}>
                    Like {likes}
                </button>
                <button className="button-dislike" onClick={() => setDislikes(dislikes + 1)}>
                    Dislike {dislikes}
                </button>
            </div>
        </div>
    );
}

export default Pet;
