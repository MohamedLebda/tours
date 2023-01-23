import React, { useState } from "react";

const Tours = (props) => {
  const [showMore, setShowMore] = useState(false);

  function readMore() {
    setShowMore((prev) => !prev);
  }

  return (
    <section className="single-tour">
      <img src={props.image} alt="country" />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">${props.price}</h4>
        </div>
        <p>
          {showMore ? props.info : `${props.info.substring(0, 200)}...`}
          <button onClick={() => readMore()}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={(event) => props.delete(event, props.id)}
        >
          not interested
        </button>
      </footer>
    </section>
  );
};

export default Tours;
