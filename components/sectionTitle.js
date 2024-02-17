import React from "react";
import { useInView, animated } from "@react-spring/web";
import Container from "./container";

const SectionTitle = (props) => {
  const [ref, inView] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      once: true,
      rootMargin: '-40% 0%',
    }
  );
  return (
    <animated.div ref={ref} style={inView}>
      <Container
        className={`flex w-full flex-col mt-4 animate-fade-up animate-duration-[1600ms] animate-delay-300 ${props.align === "left" ? "" : "items-center justify-center text-center"
          }`}>
        {props.pretitle && (
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            {props.pretitle}
          </div>
        )}

        {props.title && (
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {props.title}
          </h2>
        )}

        {props.children && (
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {props.children}
          </p>
        )}
      </Container>
    </animated.div>
  );
}

export default SectionTitle;