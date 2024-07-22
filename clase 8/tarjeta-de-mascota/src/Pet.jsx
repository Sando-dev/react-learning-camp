import React from "react";
import './Pet.css'


function Pet(props) {
    return (
        <div className="pet-card">
            <p className="pet-title">{props.name}'s Pet Card!</p>
            <div></div>
            <p>Owner: {props.owner}</p>
            <p>Age: {props.age}</p>
            <p>Specie: {props.specie}</p>
            <p>Weight: {props.weight}</p>
        </div>
    );
}

export default Pet