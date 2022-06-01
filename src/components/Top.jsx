import React, { useEffect, useState } from "react";

const Top = ({ cityName, distance }) => {
  const [leftScore, setLeftScore] = useState(1500);
  const [score, setScore] = useState(0);

  console.log(distance)

  useEffect(() => {
      setLeftScore(leftScore - distance)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName])

  return (
    <div className="flex justify-between w-full">
      <div>
        Your Score is <b>{score}</b>
      </div>

      <div className="mb-3">
        Select <b>{cityName}</b>
      </div>

      <div className="">
        Left Miles <b>{leftScore.toFixed(2)} KM</b>
      </div>
    </div>
  );
};

export default Top;
