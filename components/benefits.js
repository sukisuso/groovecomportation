import Image from "next/image";
import { useInView, animated } from "@react-spring/web";
import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
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
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2  animate-fade-left animate-ease-in animate-once animate-duration-[2000ms] animate-delay-300  ${props.imgPos === "right" ? "lg:order-1" : ""
            }`}>
          <animated.div ref={ref} style={inView}>
            <Image
              src={data.image}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover rounded-3xl shadow-2xl max-h-[30rem]"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </animated.div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""
            }`}>
          <div>
            <div className="flex flex-col w-full mt-8">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                <span dangerouslySetInnerHTML={{
                  __html: data.desc
                }}></span>

              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  <span dangerouslySetInnerHTML={{
                    __html: item.desc
                  }}></span>
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container >


    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
