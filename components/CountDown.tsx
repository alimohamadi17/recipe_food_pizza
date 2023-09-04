"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-10-20");

const CountDown = () => {
  //hydration Error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Countdown
      className="font-bold text-5xl text-yellow-300"
      date={endingDate}
    />
  );
};

export default CountDown;
