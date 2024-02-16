import Image from "next/image";
import React from "react";
import Container from "./container";

import Maps from "../public/img/brands/Google_Maps_pin.svg";
import Mariotti from "../public/img/colaborators/mariotti.png";


const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto" />
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-6 dark:bg-trueGray-800 hover:dark:bg-trueGray-600 hover:shadow-2xl hover:opacity-70 hover:border-white hover:border">
            <a
              href="https://pizzeria-mariotti.negocio.site"
              target="_blank"
              rel="noopener"
            >

              <Image
                src={Mariotti}
                width="250"
                height="250"
                alt="colaborators-mariotti"
                placeholder="blur"
                className="mx-auto"
              />
            </a>

            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/pizzeriamariotti/"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a
                href="https://maps.app.goo.gl/n6wTUwmHnhGkrfrz6"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Maps</span>

                <Image
                  src={Maps}
                  width="14"
                  height="14"
                  alt="colaborators-mariotti"

                  className="mx-auto"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
}

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);


export default Testimonials;