import { useEffect, useState } from "react";
import React from "react";

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDateTime(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <p>
        Date : {dateTime.toLocaleDateString()} Time :{" "}
        {dateTime.toLocaleTimeString()}
      </p>
    </div>
  );
}
