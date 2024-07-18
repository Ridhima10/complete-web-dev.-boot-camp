import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div classname="card" style={{width:"18rem", border:"2px solid black", margin:"4rem", "text-align":"center", "overflow":"hidden"}}>
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={333} alt="" />
                <h5>{props.title}</h5>
                <h6>{props.subtitle}</h6>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card
