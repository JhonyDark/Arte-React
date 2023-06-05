<<<<<<< HEAD
import React, { useEffect } from "react";

import gsap from "gsap";
=======
import { useEffect } from 'react';
import { gsap } from 'gsap';
>>>>>>> 92a9b45d2240b9c7d551c4c50c636f6b24245b99

function Clock() {

  useEffect(() => {
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const minutes = now.getMinutes();
      const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

      const hours = now.getHours();
      const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    gsap.set([hourHand, minuteHand, secondHand], {
      transformOrigin: "100% 50%",
    });
    setInterval(setDate, 1000);
  }, []);

  return (
<<<<<<< HEAD
    <div class="clock">
      <div class="hand hour-hand"></div>
      <div class="hand minute-hand"></div>
      <div class="hand second-hand"></div>
      <div class="center-dot"></div>
=======
    <div className="clock">
      <div className="hand hour-hand"></div>
      <div className="hand minute-hand"></div>
      <div className="hand second-hand"></div>
      <div className="center-dot"></div>
>>>>>>> 92a9b45d2240b9c7d551c4c50c636f6b24245b99
    </div>
  );
}

export default Clock;
