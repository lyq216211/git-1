import { useEffect, useState } from "react";
import React from "react";
import Tour from "./Tour";
import { Spin } from 'antd'
import { LoadingOutlined } from "@ant-design/icons";
import useFetch from '../hooks/useFetch'


const Tours = () => {

  const [isFirst, setIsFirst] = useState(true);
  const fetchTours = async () => {
    const res = await fetch("/react-tours-project");
    const data = await res.json();
    console.log(data)
    return data
  };

  const { data: tours, loding } = useFetch(fetchTours)
  function removeTour(id) {
    setTours((t) => {
      return t.filter((item) => item.id !== id);
    });
  }




  if (loding) {
    return (
      <div className="loding">
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 100,
                color: '#10b981'
              }}
              spin
            />
          }
        />
      </div>
    );
  }

  // if (tours.length === 0 ) {
  //   return (
  //     <div className="no-tours-page">
  //       <h1>No Tours Left</h1>
  //       <button className="button" onClick={fetchTours}>
  //         Refresh
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      <div className="tours">
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            {...tour}
            removeTour={removeTour}
          ></Tour>
        ))}
      </div>
    </div>
  );
};

export default Tours;
