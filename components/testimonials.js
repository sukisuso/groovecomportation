import Image from "next/image";
import React from "react";
import { useInView, animated } from "@react-spring/web";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
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

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
              <p className="text-xl leading-normal ">
                Conocido en el mundo festero <Mark>Rober</Mark>
                mezcla cualquier tipo de música que se le ponga entre las manos
              </p>

              <Avatar
                image={userOneImg}
                name="Rober del Moral"
                title="Sesiones mixtas"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
              <p className="text-xl leading-normal ">
                Las sesiones max extremas y disfrutonas han sido siempre con <Mark>Jorge</Mark>
                un genio y figura dentro del Hardtechno
              </p>
              <Avatar
                image={userTwoImg}
                name="Jorge Rubio"
                title="Hardtechno"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
              <p className="text-xl leading-normal ">
                Nuestro veterano <Mark>Vicente</Mark> curtido en mas de mil sesiones. Techno a punta pala
              </p>

              <Avatar
                image={userThreeImg}
                name="Vicentekno Pitch"
                title="Techno"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
              <p className="text-xl leading-normal ">
                Nueva incorporación <Mark>Dj Gatx</Mark> preparada para terminar todas las noches
              </p>

              <Avatar
                image={userThreeImg}
                name="Dj Gatx"
                title="Mix"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
              <p className="text-xl leading-normal ">
                <Mark>Mikelon</Mark> no te va a dejar dormir con su techno diferencial
              </p>

              <Avatar
                image={userThreeImg}
                name="Mikelon"
                title="Techno"
              />
            </div>
          </div>
        </div>
      </Container>
    </animated.div>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;