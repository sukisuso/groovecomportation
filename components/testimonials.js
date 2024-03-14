import Image from "next/image";
import React from "react";
import { useInView, animated } from "@react-spring/web";
import Container from "./container";

import HugoLogo from "../public/img/testimonials/hugo.jpeg";
import VicenLogo from "../public/img/testimonials/vicente.jpeg"
import JorgeLogo from "../public/img/testimonials/jorge.jpeg";
import RoberLogo from "../public/img/testimonials/rober.jpeg";
import MikeLogo from "../public/img/testimonials/mike.jpeg";
import LauraLogo from "../public/img/testimonials/laura.jpeg";
import EsterLogo from "../public/img/testimonials/ester.jpeg";

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
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
              <p className="text-xl leading-normal ">
                Estilo inconfundible, mezclas largas.... al subidón, creerás estar volando.
              </p>

              <Avatar
                image={EsterLogo}
                name="aBESTia"
                title="Melodic Techno, Trance music"
                description="Socia  fundadora en Groovemusic Deejays Team "
              />
            </div>
          </div>
          <a href="https://youtube.com/@hugoalbamusic" target="_blank" className="cursor-pointer" >
            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Artista experimentado con un gran gusto musical... Te dejará asombrado la limpieza de sus mezclas.
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
          <a
            href="https://www.instagram.com/gatx.13/"
            target="_blank"
            rel="noopener"
            className="cursor-pointer">
            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Frescura es la mejor definición de esta Deejay joven que domina las cabinas de una forma inigualable.
                </p>

                <Avatar
                  image={LauraLogo}
                  name="DJ Gatx"
                  title="Melodic techno, Hard techno "
                  description="Socia fundadora en Groovemusic Deejays Team <br/> Directora de Marketing del Grupo Groovemusic Corporation."
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
                  Sessiones con bpm altos, los ritmos groove y bombos contundentes
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
          <a href="https://www.instagram.com/@miiguelav6" target="_blank" className="cursor-pointer">
            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Destaca por sus sessiones dinámicas... Desde el puro House Deluxe ...al techno más exclusivo
                </p>

                <Avatar
                  image={MikeLogo}
                  name="DJ MavMaik"
                  title="House Deluxe, Melodic techno"
                  description="Socio fundador en Groovemusic Deejays Team <br/> Director de la comunidad Groovemusic Corporation"
                />
              </div>
            </div>
          </a>
          <a
            href="https://www.instagram.com/roberdelmoral?igsh=eXMydWYyNGdjem82"
            target="_blank"
            rel="noopener"
            className="cursor-pointer">

            <div className="lg:col-span-2 xl:col-auto">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Enamorado de la música electrónica desde el 1993, para Rober... vida sin música no tiene sentido
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
          <a href="https://www.instagram.com/vicenteknopitch?utm_source=qr&igsh=NTRkaXd2Y2V0ZnA0"
            target="_blank"
            rel="noopener"
            className="cursor-pointer"
          >

            <div className="">
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
                <p className="text-xl leading-normal ">
                  Curtido en más de mil sessiones, energía en estado puro...
                </p>

                <Avatar
                  image={VicenLogo}
                  name="Vicentekno Pitch"
                  title="House, Progressive, Hard House, Trance"
                  description="Socio fundador de Groovemusic Deejays Team. CEO Groovemusic Corporation"
                />
              </div>
            </div>
          </a>
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
        <div className="text-gray-600 dark:text-gray-400 italic" dangerouslySetInnerHTML={{ __html: props.description }}></div>
      </div>
    </div>
  );
}

export default Testimonials;