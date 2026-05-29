import React from "react";

const Card = (props) => {
    return (
        <div className="card bg-light p-3" style={{width: "18rem"}}>
            <img src={props.imgLink} className="card-img-top" alt={props.imgAlt}/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                    <a href="#" className="btn btn-primary">{props.cardButton}</a>
                </div>
        </div>
    );
}

export default Card;