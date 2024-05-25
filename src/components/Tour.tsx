
import React, { useState, useRef } from "react";
import { Button } from 'antd'

const Tour = (props) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { id, info, image, name, price, removeTour} = props;
  const btnRef = useRef(null)
  function showMore() {
    // btnRef.current.blur()
      setIsShowMore(!isShowMore);
    }
  return (
    <div className="tour">
      <img src={image} className="image"></img>
      <span className="tour-price-span"> '$'{price}</span>
      <div className="tour-info">
        <h3 style={{ textAlign: "center", padding: "20px 0" }}>{name}</h3>
        <p className="tour-info-p">
          {isShowMore ? info : info.slice(0, 200) + "..."}
          <Button
            ref={btnRef}
            className="show-btn"
            onClick={showMore}
            size="small"
            type="text"
          >
            {isShowMore ? "Show Less" : "Read More"}
          </Button>
        </p>
        <button onClick={() => removeTour(id)} className="button">
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
