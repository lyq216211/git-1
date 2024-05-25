import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuestionOption = (props) => {
  const { title, info } = props;
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="question-option">
      <div className="question-option-head">
        <header>
          <h3>{title}</h3>
        </header>
        <button onClick={handleClick}>{isShow ? "-" : "+"}</button>
      </div>
      {isShow && <p className="question-info">{info}</p>}
    </div>
  );
};

export default QuestionOption;
