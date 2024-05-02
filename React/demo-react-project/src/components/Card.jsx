import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div classname="card" style={{width:"18rem", border:"2px solid black", margin:"4rem", "text-align":"center"}}>
                <h5>{props.title}</h5>
                <h6>{props.subtitle}</h6>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card
