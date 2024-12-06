import React from "react";

const card = (props) => {
  return (
    <>
      <div className="d-flex p-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
