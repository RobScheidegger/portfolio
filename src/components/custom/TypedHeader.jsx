import React from "react";
import { TypeAnimation } from "react-type-animation";

export const TypedHeader = () => {
  return (
    <TypeAnimation
      sequence={[
        "Robert Scheidegger",
        100000000000000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
  );
};

const TIME_DELAY = 2000;

export const TypedSubHeader = () => {
  return (
    <TypeAnimation
      sequence={[
        "Embedded Software Engineer",
        TIME_DELAY,
        "Performance and Optimization Enthusiast.",
        TIME_DELAY,
        "Deep Learning Devotee.",
        TIME_DELAY,
        "Big Data Wrangler.",
        TIME_DELAY,
        "Robotics Geek.",
        TIME_DELAY,
      ]}
      speed={20}
      deletionSpeed={50}
      repeat={Infinity}
    />
  );
};

export default TypedHeader;
