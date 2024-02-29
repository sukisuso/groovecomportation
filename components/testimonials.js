import Image from "next/image";
import React from "react";
import { useInView, animated } from "@react-spring/web";
import Container from "./container";

import userThreeImg from "../public/img/user3.jpg";
import HugoLogo from "../public/img/testimonials/hugo.jpeg";
import VicenLogo from "../public/img/testimonials/vicen.png"
import JorgeLogo from "../public/img/testimonials/jorge.jpeg";
import RoberLogo from "../public/img/testimonials/rober.jpeg";
import MikeLogo from "../public/img/testimonials/mike.jpeg";

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
          <a
            href="https://www.instagram.com/roberdelmoral?igsh=eXMydWYyNGdjem82"
            target="_blank"
            rel="noopener"
            className="cursor-pointer">

            <div className="lg:col-span-2 xl:col-auto">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Enamorado de la <Mark>música electrónica</Mark> desde el 1993, para Rober... vida sin música no tiene sentido
                </p>

                <Avatar
                  image={RoberLogo}
                  name="Rober del Moral"
                  title="Hard Groove, Dance, House"
                  description="Socio fundador en Groovemusic Deejays Team. Codirección Groovemusic Talent Pool"
                />
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/jorgitorubio14?igsh=OG5hczlzcjM4bWtz0"
            target="_blank"
            rel="noopener"
            className="cursor-pointer"
          >
            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Sessiones con bpm altos, los ritmos <Mark>groove</Mark> y bombos contundentes
                </p>
                <Avatar
                  image={JorgeLogo}
                  name="Jorge Rubio"
                  title="Hard Groove, Techno House, Hard Techno"
                  description="Socio fundador en Groovemusic Deejays Team. Codirección Groovemusic Talent Pool"
                />
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/vicenteknopitch?utm_source=qr&igsh=NTRkaXd2Y2V0ZnA0"
            target="_blank"
            rel="noopener"
            className="cursor-pointer"
          >

            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Curtido en más de <Mark>mil sessiones</Mark>, energía en estado puro...
                </p>

                <Avatar
                  image={VicenLogo}
                  name="Vicentekno Pitch"
                  title="House, Progressive, Hard House, Trance"
                  description="Socio fundador de Groovemusic Deejays Team. Director Groovemusic Records"
                />
              </div>
            </div>
          </a>
          <a
            href="https://www.instagram.com/gatx.13/"
            target="_blank"
            rel="noopener"
            className="cursor-pointer">
            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  <Mark>Frescura</Mark> es la mejor definición de esta Deejay joven que domina las cabinas de una forma inigualable.
                </p>

                <Avatar
                  name="DJ Gatx"
                  title="Melodic techno"
                  description="Socia fundadora en Groovemusic Deejays Team Y directora de Marketing del Grupo Groovemusic Corporation."
                />
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/@miiguelav6" target="_blank" className="cursor-pointer">
            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Destaca por sus sessiones dinámicas... Desde el puro <Mark>House Deluxe</Mark>...al techno más exclusivo
                </p>

                <Avatar
                  image={MikeLogo}
                  name="DJ MavMaik"
                  title="House Deluxe"
                  description="Socio fundador en Groovemusic Deejays Team "
                />
              </div>
            </div>
          </a>
          <a href="https://youtube.com/@hugoalbamusic" target="_blank" className="cursor-pointer" >
            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  <Mark>Artista experimentado</Mark> con un gran gusto musical y una limpieza excepcional en las mezclas.
                </p>

                <Avatar
                  image={HugoLogo}
                  name="Hugo Alba"
                  title="Afro latin House"
                  description="Socio fundador en Groovemusic Deejays Team. Codirección Groovemusic Talent Pool"
                />
              </div>
            </div>
          </a>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
              <p className="text-xl leading-normal ">
                Estilo inconfundible, mezclas largas.... al <Mark>subidón</Mark>, creerás estar volando.
              </p>

              <Avatar
                name="aBESTia"
                title="Melodic Techno"
                description="Socia  fundadora en Groovemusic Deejays Team "
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
      {props.image ? <div className="flex-shrink-0 overflow-hidden rounded-full w-20 h-20">
        <Image
          src={props.image}
          width="140"
          height="140"
          alt="Avatar"
          placeholder="blur"
        />
      </div> : null}
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400 font-semibold">{props.title}</div>
        <div className="text-gray-600 dark:text-gray-400 italic">{props.description}</div>
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